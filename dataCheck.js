function dataChecker(string,rank){
    if (string === 'codenation' && rank == 1){
        console.log("Both are correct");

    } else if(string === 'codenation' && rank != 1){
        console.log("String is correct but rank is wrong");
    } else{
        console.log("Both are incorrect!");
    }
}
dataChecker('codenatn',12);