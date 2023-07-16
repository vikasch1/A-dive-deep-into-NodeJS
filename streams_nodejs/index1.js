import { readFile,writeFile} from 'fs/promises';

const filepath = new URL('./index.html',import.meta.url);

let contents = await readFile(filepath,{encoding :'utf-8'});
console.log(contents);

const data ={
    name:"vikas",
    company:"xyz",
    age:"26"
};

for(const [key,value] of Object.entries(data)){
    contents=contents.replace(`{{${key}}}`,value);
}

console.log(contents);

await writeFile(new URL('./newindex.html',import.meta.url),contents);

process.stdout.write("hi");
process.stdout.write("hello");










