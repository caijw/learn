use std::mem;

#[macro_use]
extern crate log;

use log::{Record, Level, Metadata, SetLoggerError, LevelFilter};

struct SimpleLogger;

impl log::Log for SimpleLogger {
    fn enabled(&self, metadata: &Metadata) -> bool {
        metadata.level() <= Level::Info
    }

    fn log(&self, record: &Record) {
        if self.enabled(record.metadata()) {
            println!("{} - {}", record.level(), record.args());
        }
    }

    fn flush(&self) {}
}


static LOGGER: SimpleLogger = SimpleLogger;

pub fn init() -> Result<(), SetLoggerError> {
    log::set_logger(&LOGGER)
        .map(|()| log::set_max_level(LevelFilter::Info))
}

fn main() {
	init();
	let mut a: String = "--v8-options".to_string();
	mem::swap(&mut a, &mut String::from("--help"));
    warn!("a: {}", a);
}
