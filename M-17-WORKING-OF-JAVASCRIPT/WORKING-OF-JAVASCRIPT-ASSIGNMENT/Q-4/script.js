if(true){   //Inside Block Scope

    console.log(var1);  //This Statement will cause Error Because "var1" is Accessed Before It's Initialization.
    console.log(var2); //Output :- Undefined Beacuse It "Var2" is is Accessed Before It's Initialization.
    console.log(var3); //This Statement will cause Error Because "var1" is Accessed Before It's Initialization.

    let var1 = "Steve";
    var var2 = "Smith"
    const var3 = 123;

    
    console.log(var1);
    console.log(var2);
    console.log(var3);
}