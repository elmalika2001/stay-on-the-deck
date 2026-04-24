"""One-shot script to generate two edited versions of Sara's portrait via Nano Banana.

Output:
  /app/frontend/public/assets/portrait-cutout.png       — subject on transparent / neutral bg
  /app/frontend/public/assets/portrait-atmospheric.png  — subject inside cinematic naval scene
"""
import asyncio
import base64
import os
import sys
from pathlib import Path

from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage, ImageContent

ROOT = Path(__file__).resolve().parents[1]
load_dotenv(ROOT / "backend" / ".env")

API_KEY = os.environ["EMERGENT_LLM_KEY"]
MODEL = "gemini-3.1-flash-image-preview"
ASSETS = ROOT / "frontend" / "public" / "assets"
SOURCE = ASSETS / "portrait.jpg"

PROMPTS = {
    "portrait-cutout.png": (
        "Edit this portrait of a woman wearing a black hijab. Remove the entire background "
        "completely so it becomes a clean transparent / pure black backdrop with no scenery, "
        "no walls, no flag behind her — only the subject remains. Critically PRESERVE every "
        "detail of the subject herself unchanged: her face, skin tone, expression, the exact "
        "shape of the black hijab, AND the small 42 Abu Dhabi pin on her shoulder, AND the "
        "subtle red/green/black/white UAE flag detail attached near her shoulder. Do NOT "
        "alter, recolor, or remove the pin or the flag detail. Keep clothing edges sharp and "
        "clean. Output a single high-resolution PNG with the subject perfectly isolated on a "
        "pure black (#030608) backdrop, edges hand-cut clean, no halo, no remnants of the "
        "original background."
    ),
    "portrait-atmospheric.png": (
        "Edit this portrait of a woman wearing a black hijab. Replace the original background "
        "entirely with a moody cinematic deep-sea atmosphere: dark navy water at midnight, "
        "subtle brass golden light filtering from above, soft film-grain texture, deep "
        "atmospheric haze, blurred horizon, color palette of #030608 abyss black to #0A1118 "
        "ink navy with brass-gold (#D4AF37) highlights only where light naturally catches. "
        "Critically PRESERVE the subject untouched: her face, skin tone, expression, hijab "
        "shape, AND the visible 42 Abu Dhabi pin on her shoulder, AND the subtle UAE flag "
        "detail near her shoulder must remain clearly visible and unaltered. Apply a slight "
        "matching desaturation and warm shadow grade to her so she belongs in the scene. "
        "Output a single high-resolution cinematic editorial portrait PNG that looks like a "
        "movie still."
    ),
}


async def edit_one(out_name: str, prompt: str, source_b64: str) -> None:
    chat = (
        LlmChat(
            api_key=API_KEY,
            session_id=f"sara-portrait-{out_name}",
            system_message="You are an expert cinematic photo editor producing editorial portraits.",
        )
        .with_model("gemini", MODEL)
        .with_params(modalities=["image", "text"])
    )
    msg = UserMessage(text=prompt, file_contents=[ImageContent(source_b64)])
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"[{out_name}] text: {(text or '')[:120]!r}")
    if not images:
        print(f"[{out_name}] !! no image returned")
        return
    img = images[0]
    out_path = ASSETS / out_name
    out_path.write_bytes(base64.b64decode(img["data"]))
    print(f"[{out_name}] saved → {out_path} ({out_path.stat().st_size} bytes)")


async def main() -> None:
    if not SOURCE.exists():
        print(f"source missing: {SOURCE}", file=sys.stderr)
        sys.exit(1)
    source_b64 = base64.b64encode(SOURCE.read_bytes()).decode("utf-8")
    print(f"source: {SOURCE} ({SOURCE.stat().st_size} bytes)")
    # Run sequentially so we don't share LlmChat state
    for out_name, prompt in PROMPTS.items():
        try:
            await edit_one(out_name, prompt, source_b64)
        except Exception as e:  # noqa: BLE001
            print(f"[{out_name}] ERROR: {e}")


if __name__ == "__main__":
    asyncio.run(main())
