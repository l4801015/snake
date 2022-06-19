









const n = 11;
const gZ = n => n > 0;
const l10 = n => n < 10;
const gl10 = n => gZ(n) && l10(n);

for (let i = n; gl10(i); i++) {
	console.log(i);
}
