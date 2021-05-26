const fetch = require('node-fetch');
var daySelect = process.argv[2];
var monthSelect = process.argv[3];
  //console.log(typeof monthSelect)
  //console.log(daySelect)

fetch(`https://history.muffinlabs.com/date/${monthSelect}/${daySelect}`)
.then(res => res.json())
.then(json => {
    console.log(json.date);
    //console.log(json.data.Events[0]);
    arr=json.data.Events
    let c=""
    const a="Events"
    console.log(a);
    arr.forEach((val) => {

        const year = val.year+ "\n" ;
        const text = val.text +"\n";
        c += year;
        c += text;
        console.log(c);
    });
    arr1=json.data.Deaths
    let d=""
    const b="Deaths"
    console.log(b);
    arr1.forEach((val) => {

        const year = val.year+ "\n" ;
        const text = val.text +"\n";
        d += year;
        d += text;
        console.log(c);
    });
    arr2=json.data.Births
    let h=""
    const g="Births"
    console.log(g);
    arr2.forEach((val) => {
  
        const year = val.year+ "\n" ;
        const text = val.text +"\n";
        h += year;
        h += text;
        console.log(h);
    });

  });


