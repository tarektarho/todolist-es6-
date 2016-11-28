import fs from 'fs';
import {filename} from '../config';

export default function showList() {
  fs.readFile(filename, 'utf-8', (error, data) => {
    
    if (error == null) {
      data = data.slice(0, data.length - 1);

      const lines = data.split(/\n/);

      console.log('To-do items:\n');

      let todoNummber =1;
      for (let line of lines) {
        const done = line.charAt(0) != ' ';
        console.log(`  ${todoNummber}: ${line.slice(1)} (done: ${done})`);
        todoNummber++;
      }
        

      

    } else if (error.code == 'ENOENT') {
      console.log('The to dolist is empty');
    } else {
      console.error('Error reading to dolost');
    } 
  });
}