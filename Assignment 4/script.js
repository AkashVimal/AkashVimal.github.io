var names=new Array();
names[0]="Karthi";
names[1]="Venkat";
names[2]="Saran";
names[3]="Charan";
names[4]="Krishna";
names[5]="Dilli";
names[6]="Hari";
names[7]="Vishwa";
names[8]="Jagan";
names[9]="Vinoth";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])

	}
	else{
		console.log("Hello "+names[i])
	}
}
