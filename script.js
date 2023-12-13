function trailingZeros(n) {
    const factorial = findFactorial(n);
	const trailingZeros = findTrailingZeros(factorial);
	// const tbody = document.getElementsByTagName("tbody")[0];
	// const tr = document.createElement("tr");
	// const td1 = document.createElement("td");
	// td1.innerText = `trailingZeros(${n})`

	// const td2 = document.createElement("td");
	// td2.innerText = trailingZeros;

	// tr.append(td1, td2);
	// tbody.append(tr);
	return trailingZeros;
}

function findFactorial(n) {
	let ans = 1;
	for(let i=1;i<=n;i++)
		{
			ans = ans*i;
		}
	return ans;
}

function findTrailingZeros(n) {
    let count = 0;
	while(true)
		{
			let rem = n%10;
			if(rem == 0)
			{ 
				count++;
				n = parseInt(n/10);
			}
			else
			{
				break;
			}
		}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
