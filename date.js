// 0 time denotes 1 january 1970 at 00:00:00
var start=new Date("January 1,2017"),
end=new Date(),
diff=0,days=1000*60*60*24;
diff=end-start;
console.log(Math.floor(diff/days)+"days have passed since ");