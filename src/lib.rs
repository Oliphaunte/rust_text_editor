use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct TextEditor {
    content: String,
}

#[wasm_bindgen]
impl TextEditor {
    #[wasm_bindgen(constructor)]
    pub fn new() -> TextEditor {
        TextEditor {
            content: String::new(),
        }
    }

    pub fn set_content(&mut self, content: String) {
        self.content = content;
    }

    pub fn get_content(&self) -> String {
        self.content.clone()
    }

    pub fn apply_bold(&mut self, start: usize, end: usize) {
        self.apply_formatting(start, end, "**");
    }

    pub fn apply_italic(&mut self, start: usize, end: usize) {
        self.apply_formatting(start, end, "*");
    }

    pub fn apply_strikethrough(&mut self, start: usize, end: usize) {
        self.apply_formatting(start, end, "~~");
    }

    fn apply_formatting(&mut self, start: usize, end: usize, marker: &str) {
        if start >= end || end > self.content.len() {
            return;
        }

        let (first_part, rest) = self.content.split_at(start);
        let (target, last_part) = rest.split_at(end - start);

        let formatted = format!("{}{}{}", marker, target, marker);
        self.content = [first_part, &formatted, last_part].concat();
    }
}
