//! # Art
//!
//! 一个描述美术信息的库。



#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
pub mod kinds {
    /// 采用 RGB 色彩模式的主要颜色。
    pub enum PrimaryColor {
        Red,
        Yellow,
        Blue,
    }

    /// 采用 RGB 色彩模式的次要颜色。
    pub enum SecondaryColor {
        Orange,
        Green,
        Purple,
    }
}

pub mod utils {
    use crate::kinds::*;

    /// 等量的混合两个主要颜色
    /// 来创建一个次要颜色。
    pub fn mix(c1: PrimaryColor, c2: PrimaryColor) -> SecondaryColor {
        // --snip--
    }
}