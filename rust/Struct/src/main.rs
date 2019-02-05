#[macro_use]
extern crate lazy_static;
use std::sync::Arc;
use std::sync::Mutex;

lazy_static! {
  static ref C_RID: Mutex<Option<u32>> = Mutex::new(None);
}

fn main() {
	let mut cell = C_RID.lock().unwrap();
    println!("{:?}",cell);
    let rid = cell.get_or_insert_with(|| {
    	let a = 32;
    	a
    });
    println!("{:?}",cell);
    // println!("{:?}",*rid);


}
