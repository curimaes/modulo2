const tbody= document.querySelector("tbody")

var members= data.results[0].members;

members.forEach(member => {
	let row= tbody.insertRow (-1);

	if (member.middle_name == null) { 
			var middle = ""
		} else{
			var middle = member.middle_name
		}
	let fullName=`${member.first_name} ${middle} ${member.last_name}`
	let anchor= member.url=="" ? fullName : `<a href="${member.url}"> ${fullName} </a>`
		
		
	 row.innerHTML= `<td> ${anchor} </td>` 
	 row.innerHTML+= `<td> ${member.party} </td>`
	 row.innerHTML+= `<td> ${member.state} </td>`
	 row.innerHTML+= `<td> ${member.seniority} </td>`
	 row.innerHTML+= `<td> ${member.total_votes} </td>`
})

const tfoot= document.querySelector("tfoot")