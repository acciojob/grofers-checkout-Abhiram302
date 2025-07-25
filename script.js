const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const table = document.getElementById("ans")
  const cost = table.querySelectorAll(".price")
	let sum = 0
	for(let i=0; i<cost.length; i++){
		sum += parseInt(cost[i].innerText)
	}
	const row = document.createElement('tr')
	const data = document.createElement('td')
	data.innerHTML = `Total Amount is ${sum}`
	row.appendChild(data)
	table.appendChild(row)
	table.colspan = 2
	
};

getSumBtn.addEventListener("click", getSum);

