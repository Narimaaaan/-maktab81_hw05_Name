let counter = {
    count: 0,
    increase() {
        this.count++;
    },

    decrease() {
        if (this.count > 0) this.count--;
    },

    reset() {
        this.count = 0;
    },
    

    read() {
        console.log(this.count);
    }


}

counter.increase();
counter.read();
counter.increase();
counter.read();
counter.increase();
counter.read();
counter.increase();
counter.read();