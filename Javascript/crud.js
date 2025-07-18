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