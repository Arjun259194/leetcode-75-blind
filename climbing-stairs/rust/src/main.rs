fn main() {
    let x = climb_stairs(44);
    println!("result: {x}");
}

fn climb_stairs(n: i32) -> i32 {
    if n <= 1 {
        return n;
    }

    let mut list = vec![0; (n + 1) as usize];
    list[1] = 1;
    println!("debug:{:?}", list);

    for i in 1..=n + 1 {
        let i = i as usize;
        list[i] = list[i - 1] + list[i - 2];
    }


    list[n as usize]
}
