use std::time::{Duration, Instant};
use std::thread::sleep;




fn main() {
	let a = None;
	let b = a.map(|x :i32| x);
    println!("a: {:?}, b: {:?}", a, b);
    let a = Some(12);
    let b = a.map(|x :i32| x - 1);
    println!("a: {:?}, b: {:?}", a, b);
    let now = Instant::now();
    sleep(Duration::new(1, 0));
    let new_now = Instant::now();
    println!("{:?}", new_now.duration_since(now));
    println!("{:?}", now.elapsed());

    // let data = include_bytes!(concat!(env!("GN_OUT_DIR"), "/gen/snapshot_deno.bin"));
    // println!("data: {:?}", data);

    let a = None;
    let b = a.as_ref().map(String::as_str);
    println!("a: {:?}, b: {:?}", a, b);

}
