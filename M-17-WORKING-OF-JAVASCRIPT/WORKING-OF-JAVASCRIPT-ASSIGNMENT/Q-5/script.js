if(true){   //Inside Block Scope

    console.log(var1);  //Will Cause Error Because At This
    //Time Of Code Execution, 'var1' is in Temporal Dead Zone or We Can Say-
    //It is Uninitialized.
    let var1 = 123;

}