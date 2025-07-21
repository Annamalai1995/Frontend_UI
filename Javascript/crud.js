let Cooling_places=['Kashmir','Darjeelling','Ooty','Manali']

let Add=()=>
{
    let newvalue=document.getElementById('Cool').value;
    Cooling_places.push(newvalue)
    alert('Added succesfully'+newvalue)
    List()
}

let  List=()=>
{
    let temp="";
    Cooling_places.map((getting)=>
    {
        temp+="<tr><td><ul><li>"+getting+"</li></ul></td><tr>";
   })
   document.getElementById('list').innerHTML="<table><thead bgcolor='blue'><tr><th>COOLING PLACES</th></tr></thead><tbody bgcolor='violet'align='center'>"+temp+"</tbody></table>";

}

let Edit=()=>
{
    let updateindex=document.getElementById('Cool').value;
    let newvalue=prompt("Tell us update va.ues"+Cooling_places)
    Cooling_places[updateindex]=newvalue
    List()

}
let Remove=()=>
{
    var delete_values=document.getElementById('Cool').value;
    Cooling_places=Cooling_places.filter((getting)=>
    {

        if(getting!==delete_values)  //ooty!==ooty
        {
            return getting
        }
    })
    List()

}
let search=()=>
{
    let search=document.getElementById('Cool').value;
    for(i=0;i<=Cooling_places.length;i++)
    {
        if(Cooling_places[i]===search)
        {
            return i;
        }
    }

}

let First=()=>
{
    let search=document.getElementById('Cool').value;
    for(i=0;i<=Cooling_places.length;i++)
    {
        alert("Cooling Place"+Cooling_places[i]);
        break;
    }

}
