let i = 0;
while (++i < 5) alert( i ); //from 1 to 4

let i_ = 0;
while (i++ < 5) alert( i ); //from 1 to 5

//from 0 to 4 in both cases
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );