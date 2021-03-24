cd src
cat jitter.txt
cd ..
printf "\n"
printf "\n"

printf "What program would you like to run?\n1) Fast Type\n2) Purchase Simulator\n3) Text Waterfall\n\n"
read program

if [ "$program" == "1" ]; then
    cd src
    clear
    node fasttype.js
elif [ "$program" == "2" ]; then
    cd src
    clear
    node purchaseSimulator.js
elif [ "$program" == "3" ]; then
    cd src
    clear
    node textwaterfall.js
else
    echo "Please only enter valid answers! (1, 2, or 3)"
fi
$SHELL