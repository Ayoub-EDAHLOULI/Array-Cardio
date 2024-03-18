 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];


    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    //const result = inventors.filter(checkYears => checkYears.year < 1600 && checkYears.year >= 1500);
    //console.table(result)




    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    //const result = inventors.map(elem => elem.first +' '+ elem.last)
    //console.log(result)




    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    // const result = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
    // console.table(result);





    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    //const result = inventors.reduce((totalYears, inventor) => totalYears + (inventor.passed - inventor.year), 0)
    //console.table(result)





    // 5. Sort the inventors by years lived
    // const result = inventors.sort(function(a,b){
    //   const theOne = a.passed - a.year;
    //   const theTwo = b.passed - b.year;
    //   return theOne > theTwo ? -1 : 1; 
    // })
    // console.table(result);





    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    
    
    //const dataList = ['Boulevards of Paris', 'City walls of Paris', 'Thiers wall', 'Wall of Charles V', 'Wall of Philip II Augustus', 'City gates of Paris', "Haussmann's renovation of Paris", 'Boulevards of the Marshals', 'Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', "Boulevard de l'Amiral-Bruix", 'Boulevard Mortier', 'Boulevard Poniatowski', 'Boulevard Soult', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', "Boulevard du Général-d'Armée-Jean-Simon", 'Boulevard Haussmann', "Boulevard de l'Hôpital", 'Boulevard des Italiens', 'Boulevard Lefebvre', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Malesherbes', 'Boulevard Marguerite-de-Rochechouart', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'];
    
    //const result = dataList.filter(item => item.includes(" de "))
    //console.log(result)





    // 7. sort Exercise
    // Sort the people alphabetically by last name
    // const result = people.join('')
    // console.table(result) 






    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    // function mostFrequentWord(arr, n)
    // {
        
    //     const freq = new Map();
    //     const occurrence = new Map();
    //     let max = 0;
    //     let result;
    //     let  k = 1;
 
    //     for (let i = 0; i < n; i++) {
    //         if (occurrence.has(arr[i])== true ) {
    //             continue;
    //         }
 
    //         occurrence.set(arr[i],k),k++;
    //     }
 
    //     for (let i = 0; i < n; i++) {
 
    //         // freq[arr[i]]++;
    //         let x=0;
    //         if(freq.has(arr[i])==true)
    //             x= freq.get(arr[i]);
    //         freq.set(arr[i],x+1);
    //         if (max <= freq.get(arr[i])) {
 
    //             if (max < freq.get(arr[i])) {
    //                 max = freq.get(arr[i]);
    //                 result = arr[i];
    //             }
    //             else {
    //                 if (occurrence.get(result)
    //                     < occurrence.get(arr[i])) {
    //                     max = freq.get(arr[i]);
    //                     result = arr[i];
    //                 }
    //             }
    //         }
    //     }
 
    //     return result;
    // }

    // let n = data.length;
 
    // console.log(mostFrequentWord(data, n));