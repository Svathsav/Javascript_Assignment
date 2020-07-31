let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
	 '“Either you run the day or the day runs you.”',
	 '“I’m a greater believer in luck, and I find the harder I work the more I have of it.”',
	 '“When we strive to become better than we are, everything around us becomes better too.”',
	 '“Opportunity is missed by most people because it is dressed in overalls and looks like work.”',
	 '“Don’t judge each day by the harvest you reap but by the seeds that you plant.”',
	 '“Just one small positive thought in the morning can change your whole day.”',
	 '“Whether you think you can, or you think you can’t – you’re right.”',
	 '“Don’t wish it were easier. Wish you were better.”',
	 '“Do the hard jobs first. The easy jobs will take care of themselves.”',
	 '“Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.”',
	 '“Do more than is required. What is the distance between someone who achieves their goals consistently and those who spend their lives and careers merely following? The extra mile.”',
	 '“The man who moves a mountain begins by carrying away small stones.”',
	 '“Start by doing what’s necessary, then what’s possible; and suddenly you are doing the impossible.”',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})