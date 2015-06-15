(tr -s ' ' '\n'  | sort | uniq -c |sort -nr| awk '{print $2" "$1}') < words.txt
