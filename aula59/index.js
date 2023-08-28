function recursiva (max) {
    //console.log(max) - começa do 0
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max); // começa do 1
}

recursiva(0);