var userFormEl = document.querySelector('#user-form');
var nameInputEl = document.querySelector('#name');
//var teamNameInputEl = document.querySelector('#teamname');
var nameContainerEl = document.querySelector('#name-container');
//var teamContainerEl = document.querySelector('#team-container');
var nameSearchTerm = document.querySelector('#name-search-term')

var formSubmitHandler = function (event){
    event.preventDefault();

    var name = nameInputEl.value.trim();

    if(name){
        getPlayerStats(name);
        getTeamstats(name);
        
        containerEl.textContent = '';
        nameInputEl.value = '';
    } else{
        alert('please enter a Player name or a team name');
    }
};

var getPlayerStats = function (name){
    //var apiUrl = 'https://api-nba-v1.p.rapidapi.com/players/statistics' + name + stats;
    
    //fetch(apiUrl)   
     //   .then(function(response){
       //     if(response.ok){
          //      console.log(response);
              //  responsejson().then(function(data){
                //    consolelog(data);
                  //  displayname(data,name);
               // });
          //  } else{
            //    alert('Error: '+ response.statusText);
           // }
     //   })
     //   .catch(function(error){
      //      alert('Unable to pull the data');
      //  });
//}
      //fetch above practiced in acitvity, fetch below is copy from API-nba

    fetch("https://api-nba-v1.p.rapidapi.com/players/statistics?season=2020&id=734", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
		"x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
	   }
    })
    .then(response => {
	console.log(response);
    })

    .catch(err => {
	console.log(err);
    });

    var displayname = function(name, searchTerm){
        if(name.length === 0){
            nameContainerEl.textContent = 'No Player or Team found';
            return;
        }
        repoSearchTerm.textContent = searchTerm;

        for(var i = 0; i < name.length; i++){
            
        }
    }



userFormEl.addEventListener('submit',formSubmitHandler);
