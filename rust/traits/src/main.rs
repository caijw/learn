
// use Tweet;

use traits::Summary;

use traits::Tweet;

pub fn notify(item: impl Summary) {
    println!("Breaking news! {}", item.summarize());
}


fn largest<T: PartialOrd + Copy >(list: &[T]) -> T {
    let mut largest = list[0];

    for &item in list.iter() {
        if item > largest {
            largest = item;
        }
    }

    largest
}


fn main() {
	let tweet = Tweet {
	    username: String::from("horse_ebooks"),
	    content: String::from("of course, as you probably already know, people"),
	    reply: false,
	    retweet: false,
	};

	notify(tweet);

	let number_list = vec![34, 50, 25, 100, 65];

	let result = largest(&number_list);
	println!("The largest number is {}", result);

	let char_list = vec!['y', 'm', 'a', 'q'];

	let result = largest(&char_list);
	println!("The largest char is {}", result);

}

