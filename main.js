document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2)

const tbody= document.querySelector("tbody")

var members= data.results[0].members;

members.forEach(member => {
	let row= tbody.insertRow (-1);
		
		if (member.middle_name == null) { 
			var middle = ""
		} else{
			var middle = member.middle_name
		}
	 row.innerHTML= `<td> ${member.first_name} ${middle} ${member.last_name} </td>` 
	 row.innerHTML+= `<td> ${member.party} </td>`
	 row.innerHTML+= `<td> ${member.state} </td>`
	 row.innerHTML+= `<td> ${member.seniority} </td>`
	 row.innerHTML+= `<td> ${member.total_votes} </td>` 
})