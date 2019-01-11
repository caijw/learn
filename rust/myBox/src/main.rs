use std::ops::Deref;

struct MyBox<T>(T);

impl<T> MyBox<T> {
    fn new(x: T) -> MyBox<T>{
        MyBox(x)
    }
}

impl<T> Deref for MyBox<T> {
    type Target = T;
    fn deref(&self) -> &T {
        /*返回值的引用*/
        &self.0
    }
}

fn hello(name: &str) {
    println!("Hello, {}!", name);
}

fn main() {
    println!("Hello, world!");
    let x = 5;
    let y = MyBox::new(x);
    assert_eq!(5, x);
    let z = y.deref();
    let mut k = *z;
    k = 10;
    assert_eq!(5, *(y.deref()));
    assert_eq!(5, *z);

    let m = MyBox::new(String::from("kingwei"));
    hello(&m);


}
