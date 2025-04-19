const fs=require('node:fs');

// writing to a file 
// fs.writeFile("demo.txt","Adding content to a file",function(err){
//     if(err)
//         console.error(err);
//     else 
//     console.log("Writing Operation Performed Successfully");

// });


// Reading contents from a file 
// fs.readFile("demo.txt","utf-8",function(err,data){
//     if(err)
//         console.error(err);
//     else 
//         console.log("File Contents : ",data);

// })

//creating a folder
// fs.mkdir("DemoFolder",function(err){
//     if(err)
//         console.error(err);
//     else 
//         console.log("folder created successfully");
    
// })

//creating recursive folder
// fs.mkdir("demofolder1/demo2/demo3",{recursive:true},function(err){
//         if(err)
//         console.error(err);
//     else 
//         console.log("folder created successfully");

// })

//append to a file 
// fs.appendFile("demo.txt"," This is the appended content",function(err){
//     if(err)
//         console.error(err);
//     else
//     console.log("Appended successfully");
// })


//deleting a file
// fs.unlink("demo.txt",function(err){
//     if(err)
//         console.error(err);
//     else
//         console.log("File Deleted Successfullly");
// })



//copying a file
// fs.copyFile("demo.txt","./copyFile.txt",function(err){
//     if(err)
//         console.log(err.message);
//     else
//     console.log("Copied Successfully");

// })


//removing a empty folder
// fs.mkdir("dd",function(err){
//     if (err)
//         console.error(err);
//     else
//     console.log("Empty folder created");
// })


// fs.rmdir("dd",function(err){
//     if (err)
//         console.error(err);
//     else
//         console.log("Empty folder deleted");

//
//deleting non empty folder
fs.rm("DemoFolder",{recursive:true},function(err){
    if (err)
                console.error(err.message);
            else
                console.log("Non-Empty folder deleted");

})
