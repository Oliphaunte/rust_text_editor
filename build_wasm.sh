#!/bin/bash

# Define source and target directories
RUST_OUTPUT_DIR="./vendor/rust_text_editor/pkg"
WASM_TARGET_DIR="../../priv/static/wasm"
TS_TARGET_DIR="../../assets/js"

# Remove existing output directory if it exists
if [ -d "$RUST_OUTPUT_DIR" ]; then
    echo "Removing existing $RUST_OUTPUT_DIR directory..."
    rm -rf "$RUST_OUTPUT_DIR"
fi

# Run wasm-bindgen to generate new output
wasm-bindgen --target web target/wasm32-unknown-unknown/debug/rust_text_editor.wasm --out-dir $RUST_OUTPUT_DIR

# Copy wasm and js files to the Phoenix static directory
echo "Copying wasm and js files to $WASM_TARGET_DIR..."
cp "$RUST_OUTPUT_DIR/rust_text_editor_bg.wasm" "$WASM_TARGET_DIR/"
cp "$RUST_OUTPUT_DIR/rust_text_editor.js" "$WASM_TARGET_DIR/"

# Copy TypeScript definition files to the Phoenix assets directory
echo "Copying TypeScript definition files to $TS_TARGET_DIR..."
cp "$RUST_OUTPUT_DIR/rust_text_editor_bg.wasm.d.ts" "$TS_TARGET_DIR/"
cp "$RUST_OUTPUT_DIR/rust_text_editor.d.ts" "$TS_TARGET_DIR/"

echo "Files copied successfully."
