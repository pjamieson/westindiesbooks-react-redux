import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import AUTHORS from '../data/authors';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 4 Alpha 6
import './index.css';

const AUTHORS = [
	{
		"last_name": "Aarons",
		"first_name": "Rudolph L. C.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "The Cow that Laughed and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Printers Ltd.",
						"pub_info": "Kingston: Printers Ltd., 1944."
					}
				]
			}
		]
	},
	{
		"last_name": "Aboud",
		"first_name": "James",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1956",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"<strong>James Aboud</strong> was born in Trinidad in 1956 and educated there, in Canada, and in England. He lives in Port of Spain and is a Barrister-at-Law."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "The Stone Rose (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1986"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "Lagahoo Poems",
				"summary": [
					"Speaking through the voice of the shapeshifting, trickster figure of Trinidadian legend, Aboud's arresting and truly original poems constantly rearranges the way the world can be perceived."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2003."
					}
				]
			}
		]
	},
	{
		"last_name": "Ali",
		"first_name": "Riad",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
		 		"title": "A Distant Amber",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Freeport: [Self-published], 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Alleyne",
		"first_name": "Vanessa",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "There Were Times I Thought I Was Crazy: A Black Woman's Story of Incest",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sister Vision Press",
						"pub_info": "Toronto: Sister Vision Press, 1996. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Allfrey",
		"first_name": "Phyllis Shand",
		"birth_city": "",
		"birth_country": "Dominica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1915",
		"death_day": "",
		"death_month": "",
		"death_year": "1986",
		"bio": [
			"The author, best known for her novel <em>The Orchid House</em>, was born on the island of Dominica.  She married an Englishman, and lived between the USA and Great Britain until 1954 when she returned to Dominica. She founded the Dominican Labour Party and later became a member of the West Indian Federation."
		],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1940",
				"title": "In Circles (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Raven Press",
						"pub_info": "[Great Britain] Raven Press, 1940. (Limited edition of 300 signed/numbered copies)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Palm and Oak (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "The Orchid House",
				"summary": [""],
				"editions": [
					{
						"publisher": "Constable",
						"pub_info": "London: Constable, 1953. (Hardcover)"
					},
					{
						"publisher": "E.P. Dutton",
						"pub_info": "New York: E.P. Dutton, 1954. (Hardcover)"
					},
					{
						"publisher": "Three Continents Press",
						"pub_info": "Washington, DC: Three Continents Press, 1985. (Hardcover)"
					},
					{
						"publisher": "Virago",
						"pub_info": "[London] Virago [1990]. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Als",
		"first_name": "Michael",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "No Half a Loaf",
				"summary": [""],
				"editions": [
					{
						"publisher": "Inprint",
						"pub_info": "Port-of-Spain: Inprint, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "Alvarez",
		"first_name": "Julia",
		"birth_city": "",
		"birth_country": "Dominican Republic",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Homecoming (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Grove Press",
						"pub_info": "New York: Grove Press, 1984."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "The Housekeeping Book (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "How the Garcia Girls Lost Their Accents",
				"summary": [""],
				"editions": [
					{
						"publisher": "Algonquin Books",
						"pub_info": "Chapel Hill; Algonquin Books, 1991."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1992. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "In the Time of the Butterflies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Algonquin Books",
						"pub_info": "Chapel Hill; Algonquin Books, 1994."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "The Other Side / El Otro Lado (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dutton",
						"pub_info": "New York: Dutton, 1995."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Yo",
				"summary": [""],
				"editions": [
					{
						"publisher": "Algonquin Books",
						"pub_info": "Chapel Hill: Algonquin Books, 1997."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Something to Declare: Essays",
				"summary": [""],
				"editions": [
					{
						"publisher": "Algonquin Books",
						"pub_info": "Chapel Hill: Algonquin Books, 1998."
					},
					{
						"publisher": "Plume",
						"pub_info": "New York: Plume, 1999. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "In the Name of Salome",
				"summary": [""],
				"editions": [
					{
						"publisher": "Algonquin Books",
						"pub_info": "Chapel Hill: Algonquin Books, 2000."
					},
					{
						"publisher": "Plume",
						"pub_info": "New York: Plume, 2002. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "How Tia Lola Came to Visit/Stay",
				"summary": [""],
				"editions": [
					{
						"publisher": "Alfred A. Knopf",
						"pub_info": "New York: Alfred A. Knopf, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "A Cafecito Story",
				"summary": [""],
				"editions": [
					{
						"publisher": "Chelsea Green Publishing",
						"pub_info": "White River Junction, VT: Chelsea Green Publishing, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Before We Were Free",
				"summary": [
					"The author's first novel for young adults, set in the Dominican Republic and in New York."
				],
				"editions": [
					{
						"publisher": "Alfred A. Knopf",
						"pub_info": "New York: Alfred A. Knopf, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Anderson",
		"first_name": "Vernon F.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Sudden Glory",
				"summary": [
					"<strong>Sudden Glory</strong> is a rich and absorbing novel in the finest tradition of Latin American writing. Set in Guatemala, it tells of a team of archaeologists who come to study Mayan ruins. Enveloped in the forest, they confront an unfamiliar, violent world, which cuts them off from civilization and brings them face to face with a terrible and profound crisis. With frightening inevitability the mask of the Totonacs, a psychologist's encounter with insanity, and Karen Farr's prescription of 'sudden glory' insidiously take over, and in the search for a kind of truth, their world begins to split apart. <em>(Heinemann blurb)</em>"
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Anduze",
		"first_name": "Leonard",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "When the Lion Stumbled",
				"summary": [""],
				"editions": [
					{
						"publisher": "Paria Publishing",
						"pub_info": "Port-of-Spain: Paria Publishing, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Andwele",
		"first_name": "Adisa Jelani",
		"birth_city": "",
		"birth_country": "Barbados",
		"bio": [
			"Adisa Jelani Andwele was born Michael Richards in the village of Rockhall, St Thomas, one of the first free villages in Barbados. As AJA, Adisa is one of the pioneers of performance poetry in his country Barbados and is a leading exponent of the art form in the Caribbean. A highly respected cultural personality, he has been at the forefront of many artistic initiatives and cultural events in Barbados. He has also written on the development of Barbadian music and culture."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Antiquity",
				"summary": [
					"Antiquity has two sections: 'Words', which brings together poems written over the past twenty years, and 'Chants', which includes the songs AJA has been performing to enthusiastic audiences across the Caribbean, North America, Europe and South Africa. These are poems and songs of a radical Black consciousness, Barbadian to the core, but reaching out to chant down injustice and economic oppression wherever they exist."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2003."
					}
				]
			}
		]
	},
	{
		"last_name": "Angel",
		"first_name": "Vital",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Of Heaven and Earth",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vita Art",
						"pub_info": "Port-of-Spain: Vita Art [1966]."
					}
				]
			}
		]
	},
	{
		"last_name": "Anthony",
		"first_name": "Michael",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1932",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "The Games Were Coming",
				"summary": [""],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1963."
					},
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "Boston: Houghton Mifflin, 1968."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1977. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Year in San Fernando",
				"summary": [
					"Twelve-year-old Francis gets a chance to go for a year to San Fernando to work as a servant-companion to old Mrs. Chandler, but he has never seen a town before or been away from the warmth of his family. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1965."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1978. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Green Days by the River",
				"summary": [
					"Another perceptive novel about a boy on the edge of adult responsibilities. It is the story of Shellie, a Trinidad & Tobagoian boy who moves to a new village and there meets two girls. He is charmed by Rosalie but he is attracted to the more cheerful and accessible Joan. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1967."
					},
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "Boston: Houghton Mifflin, 1967."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1986. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Sandra Street and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1973"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Cricket in the Road",
				"summary": [
					"These stories are told with the freshness and directness one has come to expect of Michael Anthony. They are all set in Trinidad & Tobago and one of them, 'Enchanted Alley,' was the crystallizing of an idea that led Anthony to write The Year in San Fernando. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1973."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1973. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "King of the Masquerade",
				"summary": [""],
				"editions": [
					{
						"publisher": "Nelson Caribbean",
						"pub_info": "Surry: Nelson Caribbean, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Glimpses of Trinidad and Tobago: With a Glance at the West Indies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Columbus Publishers",
						"pub_info": "Columbus Publishers, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Profile Trinidad: A historical survey from the discovery to 1900",
				"summary": [""],
				"editions": [
					{
						"publisher": "Macmillan Caribbean",
						"pub_info": "[London] Macmillan Caribbean, 1975"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "David Frost Introduces Trinidad and Tobago (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Trinidad-Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Franklin Watts",
						"pub_info": "Danbuty, CT: Franklin Watts, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Streets of Conflict",
				"summary": [""],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Folktales and Fantasies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Columbus Publishers",
						"pub_info": "Columbus Publishers, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Making of Port of Spain, Volume 1",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ministry of Culture",
						"pub_info": "Port-of-Spain: Ministry of Culture, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "All That Glitters",
				"summary": [
					"Who has stolen the glittering gold chain? Michael Anthony again returns to Trinidad & Tobago and to a world of growing up which has enchanted so many. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1981."
					},
					{
						"publisher": "William Collins & Sons",
						"pub_info": "William Collins & Sons, 1981."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1983. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Bright Road to El Dorado",
				"summary": [""],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Port of Spain in a World at War 1939-45 (The Making of Port of Spain, Volume 2)",
					"summary": [""],
					"editions": [
					{
						"publisher": "Ministry of Sports, Culture and Youth Affairs",
						"pub_info": "Port-of-Spain: Ministry of Sports, Culture and Youth Affairs [1983]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "A Better and Brighter Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "Circle Press",
						"pub_info": "Port-of-Spain: Circle Press, 1987"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Towns and Villages of Trinidad & Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Circle Press",
						"pub_info": "Port of Spain: Circle Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Chieftain's Carnival and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman Caribbean",
						"pub_info": "Harlow, Essex: Longman Caribbean, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "In the Heat of the Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Portsmouth, NH: Heinemann, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Historical Dictionary of Trinidad & Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Scarecrow Press",
						"pub_info": "Scarecrow Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Parade of the Carnivals of Trinidad & Tobago, 1839-1989",
				"summary": [""],
				"editions": [
					{
						"publisher": "Circle Press",
						"pub_info": "Port of Spain: Circle Press, 19??."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "First in Trinidad",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Heroes of the People of Trinidad & Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "The Golden Quest: The Four Voyages of Christopher Columbus",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "High Tide of Intrigue",
				"summary": [
					"<em>High Tide</em> of Intrigue is both a racy thriller and a foray into the world of drugs, corruption, and the triumph of good sense and integrity over weakness and self-interest. The setting, Trinidad, and the theme of drugs draw attention to the position of the region as a staging post in the international drugs trade. Police officer Maureen Mason-Adams is unswerving in her commitment to the fight against drugs. When she discovers that fellow officers, including her husband, are in league with Trinidadian and Grenadian drug runners, the clean-up campaign becomes a personal crusade. At risk to her life, Maureen embarks on an island-hopping investigation of a multimillion-dollar trade conducted by some of the Caribbean's most dangerous men. [Heinemann blurb]"
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Heinemann, 2001. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Anaparima: The History of San Fernando and its Environs (The Naparimas). Vol. I. 1595 to 1900",
				"summary": [""],
				"editions": [
					{
						"publisher": "City Council of San Fernando",
						"pub_info": "San Fernando: City Council of San Fernando, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Antoni",
		"first_name": "Brian",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Paradise Overdose",
				"summary": [""],
				"editions": [
					{
						"publisher": "Simon and Schuster",
						"pub_info": "New York: Simon and Schuster [1994]."
					},
					{
						"publisher": "Grove/Atlantic",
						"pub_info": "New York: Grove/Atlantic, 1997. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Antoni",
		"first_name": "Robert",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1958",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Divina Trace",
				"summary": [
					"Magical realism with a Caribbean spin. Not an easy read, but worth the effort. Winner of the 1992 Commonwealth Writers Prize for Best First Novel."
				],
				"editions": [
					{
						"publisher": "Overlook",
						"pub_info": "Woodstock, NY: Overlook [1992]."
					},
					{
						"publisher": "Overlook",
						"pub_info": "Woodstock, NY: Overlook [1993]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Archipelago: New Caribbean Writing (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Conjunctions/Bard College",
						"pub_info": "Annandale-on-Hudson, NY: Conjunctions/Bard College, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Blessed is the Fruit",
				"summary": [""],
				"editions": [
					{
						"publisher": "Henry Holt",
						"pub_info": "New York: Henry Holt [1997]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "My Grandmother's Erotic Folktales",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber, 2000."
					},
					{
						"publisher": "Grove Press",
						"pub_info": "New York: Grove Press [2000]."
					}
				]
			}
		]
	},
	{
		"last_name": "Apple",
		"first_name": "Arnold",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Son of Guyana (Autobiography)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London; New York: Oxford University Press, 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "Archer",
		"first_name": "Beatrice",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Poison of My Hate",
				"summary": [""],
				"editions": [
					{
						"publisher": "National Educational Company of Zambia",
						"pub_info": "National Educational Company of Zambia, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Arenas",
		"first_name": "Reinaldo",
		"birth_city": "",
		"birth_country": "Cuba/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1943",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Rienaldo Arenas was born in Holguin, Cuba in 1943. The most widely read post-revolutionary Cuban writer, Arenas is not well-known in his native country due to the suppression there of his writings. He was expelled from Cuba in 1980."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Singing from the Well",
				"summary": [
					"Arenas' extensive revision of his first novel 'Cantando en el pozo' (written at age 22), was the first of a five-book semi-autobiographical sequence called the 'pentagonia' (five agonies)."
				],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "Cuba, 1967."
					},
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1987."
					},
					{
						"publisher": "Penguin",
						"pub_info": "new York: Penguin, 1988. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Celestino antes del alba",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ediciones Union",
						"pub_info": "La Habana: Ediciones Union, 1967"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Hallucinations: Being an Account of the Life and Adventures of Friar Servando Teresa De Mier",
				"summary": [
					"Originally published in French as Le Monde Hallucinant."
				],
				"editions": [
					{
						"publisher": "Seuil",
						"pub_info": "Seuil, 1968. (French edition)"
					},
					{
						"publisher": "Ultramarine Publishing Co.",
						"pub_info": "Hastings-on-Hudson, NY: Ultramarine Publishing Co., 1971."
					},
					{
						"publisher": "Harper & Row",
						"pub_info": "New York: Harper & Row, 1971."
					},
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Palace of the White Skunks",
				"summary": [
					"This, the second volume of Arenas' semi-autobiographical quintet, is a portrait of Cuba as Castro was about to take power. Published in Spanish as El Palacio de las Blanquisimas Mofetas."
				],
				"editions": [
					{
						"publisher": "Seuil",
						"pub_info": "Seuil, 1975. (French edition)"
					},
					{
						"publisher": "Monte Avila",
						"pub_info": "Caracas: Monte Avila, 1980. (Spanish edition)"
					},
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1990."
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Old Rosa: A Novel in Two Stories",
				"summary": [
					"Originally published in Spanish as La vieja Rosa."
				],
				"editions": [
					{
						"publisher": "Editorial Arte",
						"pub_info": "Caracas: Editorial Arte, 1980."
					},
					{
						"publisher": "Grove Press",
						"pub_info": "New York: Grove Press, 1989."
					},
					{
						"publisher": "Atlantic Monthly Press",
						"pub_info": "Atlantic Monthly Press, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Farewell to the Sea: A Novel of Cuba",
				"summary": [
					"The third book of Arenas' 'pentagonia.' The first version of this novel disappeared in Havana in 1969. The second version was confiscated in Havana in 1971. The published version was smuggled out of Havana in 1974. Originally published in Spanish as Otra Vez El Mar."
				],
				"editions": [
					{
						"publisher": "Editorial Argos Vergara",
						"pub_info": "Editorial Argos Vergara, 1982"
					},
					{
						"publisher": "Viking",
						"pub_info": "[New York] Viking [1986]."
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 1987. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "El Central",
				"summary": [""],
				"editions": [
					{
						"publisher": "Avon Books",
						"pub_info": "New York: Avon Books, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Ill-Fated Peregrinations of Fray Servando",
				"summary": [
					"Originally published in 1968 as <em>Hallucinations: Being an Account of the Life and Adventures of Friar Servando Teresa De Mier</em>."
				],
				"editions": [
					{
						"publisher": "Avon",
						"pub_info": "New York: Avon, 1987. (Paperback)"
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Graveyard of the Angels",
				"summary": [""],
				"editions": [
					{
						"publisher": "Avon Books",
						"pub_info": "New York: Avon Books, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "The Doorman",
				"summary": [
					"The author's first book to be set in the United States. Published in Spanish as El portero."
				],
				"editions": [
					{
						"publisher": "Ediciones Universal",
						"pub_info": "Miami: Ediciones Universal, 1990."
					},
					{
						"publisher": "Grove Weidenfeld",
						"pub_info": "New York: Grove Weidenfeld, 1991."
					},
					{
						"publisher": "Grove",
						"pub_info": "New York: Grove Press, 1994. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Viaje a la Habana: A Novel in Three Voyages",
				"summary": [
					"Written in New York between 1983 and 1987."
				],
				"editions": [
					{
						"publisher": "Ediciones Universal",
						"pub_info": "Miami: Ediciones Universal, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Before Night Falls (Memoirs)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1993"
					},
					{
						"publisher": "Penguin",
						"pub_info": "London: Penguin, 1994. (Paperback)"
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 2000. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Assault",
				"summary": [
					"The fifth and final book of Arenas' 'pentagonia.'"
				],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1994."
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "The Color of Summer: Or the New Garden of Earthly Delights",
				"summary": [
					"The fourth book of Arenas' 'pentagonia.'"
				],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Mona and Other Tales",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vintage",
						"pub_info": "New York: Vintage, 2001. (Trade paperback)"
					},
					{
						"publisher": "Knopf Canada",
						"pub_info": "Toronto: Knopf Canada, 2001. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Arthur",
		"first_name": "Kevyn Alan",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1942",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Kevyn Arthur was born in Barbados in 1942 and spent his boyhood in Trinidad and Barbados. Some of his early fiction and poetry was published in Bim. He was a member of Derek Walcott’s Theatre Workshops. Arthur divides his time between Barbados, Trinidad, and the U.S.A."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "England and Nowhere (Poems)",
				"summary": [
					"Exploring Barbadian and American experience, Kevyn Arthur celebrates Caribbean diversity and the provisionality of life of a 'precarious people' and, dealing with issues of identity with iconoclastic wit, demolishes views which are partial and narrow."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The View from Belmont",
				"summary": [
					"Told through the letters of a young English widow on a Trinidadian estate in 1823, the novel explores the inner world of human relationships under slavery and raises questions about the contemporary Caribbean, the nature of history and its interpretation."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Ashe",
		"first_name": "Rosalind",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Moths",
				"summary": [""],
				"editions": [
					{
						"publisher": "Holt, Rinehart and Winston",
						"pub_info": "New York: Holt, Rinehart and Winston, 1976."
					},
					{
						"publisher": "Penguin",
						"pub_info": "Middlesex: Penguin, 1977. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "The Hurricane Wake",
				"summary": [""],
				"editions": [
					{
						"publisher": "Henry Holt",
						"pub_info": "New York: Henry Holt, 1977."
					},
					{
						"publisher": "Hutchinson",
						"pub_info": "London: Hutchinson, 1977."
					},
					{
						"publisher": "Penguin",
						"pub_info": "Middlesex: Penguin, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Star-Crossed",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bantam",
						"pub_info": "Bantam, 1979. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Takeover",
				"summary": [""],
				"editions": [
					{
						"publisher": "Fontana",
						"pub_info": "Fontana, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Literary Houses: Ten Famous Houses in Fiction",
				"summary": [""],
				"editions": [
					{
						"publisher": "Facts On File",
						"pub_info": "New York: Facts On File, 1982."
					},
					{
						"publisher": "Dragon's World",
						"pub_info": "London: Dragon's World, 1982. (Paperback)"
					},
					{
						"publisher": "Collins Willow",
						"pub_info": "Toronto: Collins Willow, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "More Literary Houses",
				"summary": [""],
				"editions": [
					{
						"publisher": "Facts On File",
						"pub_info": "New York: Facts On File, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "International Literary Houses",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dragon's World",
						"pub_info": "Surrey: Dragon's World, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Children's Literary Houses: Famous Dwellings in Children's Fiction",
				"summary": [""],
				"editions": [
					{
						"publisher": "Paper Tiger",
						"pub_info": "Surrey: Paper Tiger, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Dark Runner",
				"summary": [""],
				"editions": [
					{
						"publisher": "Century",
						"pub_info": "London: Century, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Laying of the Noone Walker",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bantam",
						"pub_info": "London: Bantam, 1987. (Hardcover)"
					},
					{
						"publisher": "Corgi",
						"pub_info": "London: Corgi Books, 1987. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Bain",
		"first_name": "Francis",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "A Child of the Carnival",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately printed",
						"pub_info": "Trinidad & Tobago: Privately printed, 1974."
					}
				]
			}
		]
	},
	{
		"last_name": "Baksh",
		"first_name": "Ishmael",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Black Light",
				"summary": [
					"A novel set in Newfoundland, Canada."
				],
				"editions": [
					{
						"publisher": "Jesperson Press",
						"pub_info": "St. John's, NF: Jesperson Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Out of Darkness",
				"summary": [""],
				"editions": [
					{
						"publisher": "Jesperson Press",
						"pub_info": "St. John's, NF: Jesperson Press, 19??."
					}
				]
			}
		]
	},
	{
		"last_name": "Baldeosingh",
		"first_name": "Kevin",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Autobiography of Paras P",
				"summary": [
					"Paras P. is the most correct person in Trinidad & Tobago, shown by the popularity of his Centre of Correctness. This candid autobiography illustrates how Paras' whole life has been geared to being 'proper', from early days learning the Queen's English to life as the most upright of politicians. Pity that Paras never noticed the laughter and ridicule permeating all the tapes he has of his doings.... Full of wit and wisdom, The Autobiography of Paras P. is a tongue-in-cheek glimpse into the life of one man who honestly believes he is the last bastion of morality in Trinidad & Tobago. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heineman,1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Virgin's Triangle",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heineman,1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Ball",
		"first_name": "A.G.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Kill 'em All",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Ilfracombe: Stockwell, 1976."
					}
				]
			}
		]
	},
	{
		"last_name": "Barrett",
		"first_name": "Lindsay",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "The State of Black Desire (Essays and Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately Printed",
						"pub_info": "Paris: [Privately Printed], 1966"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Song for Mumu: A Novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1967."
					},
					{
						"publisher": "Howard University Press",
						"pub_info": "Washington, DC: Howard University Press, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "The Conflicting Eye (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Paul Breman",
						"pub_info": "Paul Breman, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Veils of Vengeance Falling",
				"summary": [""],
				"editions": [
					{
						"publisher": "Fourth Dimension Publishers",
						"pub_info": "Fourth Dimension Publishers, ????"
					}
				]
			}
		]
	},
	{
		"last_name": "Barrett",
		"first_name": "Nathan Noble",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Bars of Adamant",
				"summary": [""],
				"editions": [
					{
						"publisher": "Fleet",
						"pub_info": "New York: Fleet, 1966."
					}
				]
			}
		]
	},
	{
		"last_name": "Bascom",
		"first_name": "Harold",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Apata",
				"summary": [
					"In 1959, the year Queen Elizabeth of England visited the country, newspapers in British Guiana reported a manhunt taking place deep within the forest. Apata is an imaginative reconstruction of the life of the man at its center, a charismatic young Guianese whose hopes of a brilliant future are frustrated by the color of his skin. Despite his obvious abilities, he cannot complete his education, and is forced instead to take up ignominious work for Glenn, a white homosexual trader. Trapped by a system of prejudices, and deeply humiliated, Apata is pushed into a cycle of crime that leads to the life of a fugitive, and a grisly demise. Harold Bascom's Apata is the story of victims and outcasts everywhere, a gripping adventure that confronts a confusing and hurtful period when different cultures collided. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Bascombe",
		"first_name": "George",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Preacher and the Strumpet and Other Short Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "New York: Vantage, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Bayley",
		"first_name": "Jack",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "The Mudheads",
				"summary": [
					"Set in the colony of British Guiana in the 1930s, The Mudheads gives a compelling insight into the lives of the privileged white elite who had one set of rules for themselves and another for those who took their orders."
				],
				"editions": [
					{
						"publisher": "ssociated Publishing Combine",
						"pub_info": "Warwickshire: Associated Publishing Combine, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "Behar",
		"first_name": "Ruth",
		"birth_city": "",
		"birth_country": "Cuba/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Bridges to Cuba/Puentes a Cuba (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Michigan University Press",
						"pub_info": "Michigan: Michigan University Press, 1995."
					},
					{
						"publisher": "Michigan University Press",
						"pub_info": "Michigan: Michigan University Press, 1996. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Belasco",
		"first_name": "Lionel",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "1967",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Strange Happenings: Tales of the Caribbean",
				"summary": [""],
				"editions": [
					{
						"publisher": "Law-Arts Publishers",
						"pub_info": "New York: Law-Arts Publishers, 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "Belgrave",
		"first_name": "Valerie",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Ti Marie",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heinemann, 1988."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "Portsmouth, New Hampshire: Heinemann, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Bennett",
		"first_name": "Alvin",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Because They Know Not",
				"summary": [""],
				"editions": [
					{
						"publisher": "Phoenix Press",
						"pub_info": "London: Phoenix Press, 1961 (?)."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "God the Stonebreaker",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "Bennett",
		"first_name": "Louise",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1919",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1942",
				"title": "Verses in Jamaican Dialect",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1942"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1943",
				"title": "Jamaican Humour in Dialect",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1943"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Anancy Stories and Poems in Dialect",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1944"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1948", "title": "Jamaican Dialect Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Gleaner Co.",
						"pub_info": "Kingston: The Gleaner Co., [1948]"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1949",
				"title": "Mi's' Lulu Sez: A Collection of Dialect Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1949"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "Anancy Stories and Dialect Verse",
				"summary": [""],
				"editions": [
					{
						"publisher": "Kingston: Pioneer Press",
						"pub_info": "1950"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Lulu Says: Dialect Verses with Glossary",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1952"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "Anancy Stories and Dialect Verse (New series)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Pioneer Press",
						"pub_info": "Kingston: Pioneer Press, 1957."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Laugh with Louise: A Pot-Pourrie of Jamaican Folk-Lore, Stories, Songs and Verses",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1961"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Jamaican Labrish",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sangster's Book Stores",
						"pub_info": "Jamaica: Sangster's Book Stores, 1966."
					}
					]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Anancy and Miss Lou",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sangster's",
						"pub_info": "Kingston: Sangster's, 1979"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Jamaica Maddah Goose (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Jamaica School of Art ",
						"pub_info": "Jamaica School of Art , 1981"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982", "title": "Selected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1982"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Aunty Roachy Seh",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sangster's",
						"pub_info": "Kingston: Sangster's, 1993"
					}
				]
			}
		]
	},
	{
		"last_name": "Berry",
		"first_name": "James",
		"birth_city": "",
		"birth_country": "Jamaica/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"In 1979 James Berry received the Minority Rights Arts Group Award, and in 1981 he won first prize in the [British] Poetry Society's National Poetry Competition. In 1990 he received the Order of the British Empire in recognition of his great contribution to people of all ages through his writing. Mr. Berry was born and raised in Jamaica. He now lives in England."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Bluefoot Traveller (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1976"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Fractured Circles (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1979"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Lucy's Letters and Loving (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1982"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "News for Babylon: The Chatto Book of Westindian-British Poetry (Editor)",
				"summary": [
					"Includes poems by John Agard (Guyana), Ebony Ajibade (Montserrat), James Ali (Guyana), Nkemka Asika [Frank John] (Trinidad & Tobago), James Berry (Jamaica), Jawiattika Blacksheep (Jamaica), Valerie Bloom (Jamaica), Hugh Hailson Boatswain (Antigua), Imruh Bakari Caesar (St. Kitts), Faustin Charles (Trinidad & Tobago), Frederick d'Aguiar (Guyana), Creswell Durrant (St. Vincent), John Figueroa (Jamaica), Wilson Harris (Guyana), and 26 others."
				],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1984]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Chain of Days (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "Oxford University Press, 1985. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "A Thief in the Village and Other Stories",
				"summary": [
					"A collection of nine short stories about life in contemporary Jamaica, covering such subjects as a young boy's desire to buy shoes for the cricket team and a girl's adventures on a coconut plantation. A 1989 Coretta Scott King Honor Book."
				],
				"editions": [
					{
						"publisher": "Hamish Hamilton",
						"pub_info": "London: Hamish Hamilton, 1987."
					},
					{
						"publisher": "Orchard Books",
						"pub_info": "New York: Orchard Books [1988]."
					},
					{
						"publisher": "Puffin Books",
						"pub_info": "London: Puffin Books, 1989. (Paperback)"
					},
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1990. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Anancy - Spiderman",
				"summary": [
					"A collection of twenty tales recounting the antics of the West Indian trickster Anancy and his companions Bro Monkey, Bro Dog, and Bro Tiger."
				],
				"editions": [
					{
						"publisher": "Walker Books",
						"pub_info": "London: Walker Books, 1988."
					},
					{
						"publisher": "Henry Holt & Co.",
						"pub_info": "New York: Henry Holt & Co., 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "When I Dance (Poems)",
				"summary": [
					"A collection of 59 poems for young adults, celebrating life in inner-city Britain and in the rural Caribbean."
				],
				"editions": [
					{
						"publisher": "Hamish Hamilton",
						"pub_info": "London: Hamish Hamilton, 1988."
					},
					{
						"publisher": "Harcourt Brace Jovanovich",
						"pub_info": "San Diego: Harcourt Brace Jovanovich [1991]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "The Future-Telling Lady and Other Stories",
				"summary": [
					"A collection of six short stories set in Jamaica. (The English edition also includes the novella <em>Ajeemah and his Son</em>.)"
				],
				"editions": [
					{
						"publisher": "Hamish Hamilton",
						"pub_info": "London: Hamish Hamilton, 1991."
					},
					{
						"publisher": "Willa Perlman Books",
						"pub_info": "[New York] Willa Perlman Books [1993]."
					},
					{
						"publisher": "Trophy Press",
						"pub_info": "New York: Trophy Press, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Ajeemah and His Son",
				"summary": [
					"A father and his eighteen-year-old son are each affected differently by their experiences as slaves in Jamaica in the early nineteenth century. (This novella was included in the English edition of The Future-Telling Lady.)"
				],
				"editions": [
					{
						"publisher": "Willa Perlman Books",
						"pub_info": "[New York] Willa Perlman Books [1992]."
					},
					{
						"publisher": "Trophy Press",
						"pub_info": "New York: Trophy Press, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Celebration Song",
				"summary": [
					"It's Jesus's birthday, and the whole earth celebrates in 'a world praiseful and joyful'.' Mary is the most joyous of all. In a lyrical song, she tells her son the story of his miraculous birth and wonders what his future will hold. Set against a Caribbean background, Berry's exuberant poem creates an intimate portrait of Mary and Jesus as mother and child."
				],
				"editions": [
					{
						"publisher": "Simon & Schuster",
						"pub_info": "New York: Simon & Schuster, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Classic Poems to Read Aloud",
				"summary": [
					"A celebration of the diversity of ideas, sounds and rhythms of poetry from around the world. James Berry shows the richness and variety of the poetic voice with selections from Africa, the Caribbean, India, as well as Europe and America. The are poems that are thought-provoking, uplifting and occasionally humorous."
				],
				"editions": [
					{
						"publisher": "Kingfisher Books",
						"pub_info": "Kingfisher Books, 1995."
					},
					{
						"publisher": "Kingfisher Books",
						"pub_info": "Kingfisher Books, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Hot Earth Cold Earth (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bloodaxe Books",
						"pub_info": "Bloodaxe Books, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Rough Sketch Beginning",
				"summary": [
					"A descriptive poem about an artist's thoughts and visions as he prepares a sketch for a painting. A dual exploration of the human creative process combines elements of traditional poetry with illustrations of natural subjects, in a picture book demonstration of a work of art in progress. Illustrated by Robert Florczak."
				],
				"editions": [
					{
						"publisher": "Harcourt Brace",
						"pub_info": "Harcourt Brace, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Don't Leave an Elephant to Go and Chase a Bird",
				"summary": [
					"A rhythmically told, illustrated tale. When Anancy Spiderman calls a morning greeting to the Skygod, a corncob appears in his hand. Can Anancy turn the corncob into something even better? He embarks on a series of trades, but just when it looks as though Anancy is going home with a truly spectacular gift, his greed gets the better of him."
				],
				"editions": [
					{
						"publisher": "Simon & Schuster",
						"pub_info": "New York: Simon & Schuster, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Everywhere Faces Everywhere",
				"summary": [
					"Interweaving reminiscences of his Caribbean childhood with incisive observations on modern young people, the award-winning poet presents forty-four poems that explore the theme of diversity in sections on growing up, nature, change, the magic of myths, and a society unwilling to embrace diversity."
				],
				"editions": [
					{
						"publisher": "Simon & Schuster",
						"pub_info": "New York: Simon & Schuster, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "First Palm Trees: An Anancy Spiderman Story",
				"summary": [
					"The West Indian trickster Anancy Spiderman tries to persuade Sun-Spirit, Water-Spirit, Earth-Spirit, and Air-Spirit to create the world's first palm trees so that he can collect a reward from the king."
				],
				"editions": [
					{
						"publisher": "Simon & Schuster",
						"pub_info": "New York: Simon & Schuster, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "A Nest Full of Stars",
				"summary": [
					"This collection of poetry for children aged 9-11 is filled with warm and colourful memories of the author's Caribbean childhood."
				],
				"editions": [
					{
						"publisher": "Macmillan",
						"pub_info": "Macmillan, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Birbalsingh",
		"first_name": "Frank",
		"birth_city": "",
		"birth_country": "Guyana/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Indo-West Indian Cricket",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "London: Hansib, 1988"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Passion and Exile: Essays in Caribbean Literature",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "[London: Hansib, 1988]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Jahaji Bhai - An anthology of Indo-Caribbean Literature (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Indenture and Exile: The Indo-Caribbean Experience (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Novels and the Nation: Essays in Canadian Literature",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Rise of West Indian Cricket: From Colony to Nation",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "St. John's, Antigua: Hansib, 1996"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Frontiers of Caribbean Literature in English (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "St. Martins Press",
						"pub_info": "New York: St. Martins Press [1996]."
					}
				]
			}
		]
	},
	{
		"last_name": "Bissoondath",
		"first_name": "Neil",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1955",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Neil Bissoondath was born in Arima, Trinidad & Tobago, in 1955 and emigrated to Canada in 1973. He is the nephew of V.S. Naipaul and the late Shiva Naipaul."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Digging Up the Mountains (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Macmillan of Canada",
						"pub_info": "Toronto: Macmillan of Canada, 1985."
					},
					{
						"publisher": "Viking",
						"pub_info": "[New York] Viking [1986]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "A Casual Brutality",
				"summary": [""],
				"editions": [
					{
						"publisher": "Macmillan of Canada",
						"pub_info": "Toronto: Macmillan of Canada, 1988."
					},
					{
						"publisher": "Bloomsbury",
						"pub_info": "London: Bloomsbury, 1988."
					},
					{
						"publisher": "Clarkson N. Potter",
						"pub_info": "New York: Clarkson N. Potter, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "On the Eve of Uncertain Tomorrows (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lester & Orpen Dennys",
						"pub_info": "Toronto: Lester & Orpen Dennys, 1990."
					},
					{
						"publisher": "Clarkson N. Potter",
						"pub_info": "New York: Clarkson N. Potter, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Innocence of Age",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "Toronto: Knopf, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Selling Illusions: The Cult of Multi-Culturalism in Canada",
				"summary": [""],
				"editions": [
					{
						"publisher": "Penguin",
						"pub_info": "Toronto: Penguin, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "The Worlds Within Her",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vintage",
						"pub_info": "London: Vintage, 1998."
					},
					{
						"publisher": "Knopf",
						"pub_info": "Toronto: Knopf, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Doing the Heart Good",
				"summary": [""],
				"editions": [
					{
						"publisher": "Scribners",
						"pub_info": "London: Scribners, 2002."
					},
					{
						"publisher": "Cormorant Books",
						"pub_info": "Toronto, ON, Canada: Cormorant Books, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Bissundyal",
		"first_name": "Churaumanie",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Churaumanie Bissundyal was born in 1950 in the Mahaicony River area, Guyana, but grew up in Leguan in the Essequibo River. His father was a sea-defence labourer and his mother a worker in the rice fields. He attended an Anglican school in Leguan and later worked as a schoolteacher in the North West District, and then teaching English and Hindi at the Hindu College, Cove and John. He has worked as a civil servant, as an insurance inspector on the sugar estates of the Corentyne and as a book reviewer for the Mirror newspaper."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Glorianna",
				"summary": [
					"A long poem published under the pseudonym of Omartelle Blenessequi."
				],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-Published, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Cleavage",
				"summary": [
					"A long narrative poem which deals with the historical experience of indentured Indian immigration, the loss of cultural wholeness and the halting path towards the regeneration of a new Indo-Guyanese culture out the fragments of the past and immersion in the Guyanese land."
				],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-Published, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Whom the Kiskadees Call",
				"summary": [
					"Set in a Guyanese brothel, and evoking both the spectacular dereliction of the slums of Georgetown and the peaceful intensity of the remote interior, beauty and squalor exist in tense equilibrium in this novel of injustice, revenge and expiation."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Black",
		"first_name": "Clinton",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Tales of Old Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "Pioneer Press",
						"pub_info": "Kingston: Pioneer Press, 1952."
					},
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "History of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965", "title":
				"The Story of Jamaica",
				"summary": [
					"A complete revision of <em>History of Jamaica</em>."
				],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Pirates of the West Indies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cambridge University Press",
						"pub_info": "Cambridge University Press, 1989. (Paperback)"
					},
					{
						"publisher": "Cambridge University Press",
						"pub_info": "Cambridge University Press, 1990. (Hardcover)"
					}
				]
			}
		]
	},
	{
		"last_name": "Bonnick",
		"first_name": "Bertrand",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Bertrand Bonnick has a degree in Chemistry, Math and Physics and is a practicing dentist, attaining his Doctor of Dental Surgery with honors from the University of Maryland, Baltimore."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Bighead",
				"summary": [
					"In this book <strong>Bertrand Bonnick</strong> writes of youthful tribulations and a young man's struggle to deal with issues of young love, sexuality, family secrets, and the search for identity and belonging in a story set in the Caribbean. The Protagonist, Bighead, confronts the hypocrisies of expected behaviors in an environment not quite ready for change. He deals with his challenges using a success formula based on trial and error as well as being influenced by strong role models of both sexes. Bighead is a universal character, and the lessons he learns are the lessons for us all. <em>(L.Snow, May 1997)</em>"
				],
				"editions": [
					{
						"publisher": "Seaburn",
						"pub_info": "New York: Seaburn, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Boodhoo",
		"first_name": "I.J. (Isaiah James)",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Between Two Seasons",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Harlow, Essex: Longman, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Bowyer",
		"first_name": "Richard",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Wedding Ring and Other Stories of Trinidad and Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately printed",
						"pub_info": "Trinidad & Tobago: [Privately printed], 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "Bradner",
		"first_name": "James",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Danny Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Harlow, Essex: Longman, 1981."
					}
				]
			}
		]
	},
	{
		"last_name": "Braithwaite",
		"first_name": "Edward R. (Ted)",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "To Sir With Love",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bodley Head",
						"pub_info": "London: Bodley Head, 1959."
					},
					{
						"publisher": "Prentice-Hall",
						"pub_info": "Englewood Cliffs: Prentice-Hall, 1959."
					},
					{
						"publisher": "Bodley Head",
						"pub_info": "Toronto: Bodley Head, 1967."
					},
					{
						"publisher": "Jove",
						"pub_info": "Jove, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "A Kind of Homecoming",
				"summary": [""],
				"editions": [
					{
						"publisher": "Prentice-Hall",
						"pub_info": "Englewood Cliffs: Prentice-Hall, 1962."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Paid Servant",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bodley Head",
						"pub_info": "London: Bodley Head, 1963."
					},
					{
						"publisher": "McGraw-Hill",
						"pub_info": "New York: McGraw-Hill, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Choice of Straws",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bodley Head",
						"pub_info": "London: Bodley Head, 1965."
					},
					{
						"publisher": "Bobbs-Merrill",
						"pub_info": "Indianapolis: Bobbs-Merrill, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Reluctant Neighbors",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bodley Head",
						"pub_info": "London: Bodley Head, 1972."
					},
					{
						"publisher": "McGraw-Hill",
						"pub_info": "New York: McGraw-Hill, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Honorary White: A Visit to South Africa",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bodley Head",
						"pub_info": "London: Bodley Head, 1975"
					},
					{
						"publisher": "McGraw-Hill",
						"pub_info": "New York: McGraw-Hill, 1975."
					}
				]
			}
		]
	},
	{
		"last_name": "Brand",
		"first_name": "Dionne",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "'Fore Day Morning",
				"summary": [""],
				"editions": [
					{
						"publisher": "Khoisan Artists",
						"pub_info": "Toronto: Khoisan Artists, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979", "title": "Earth Magic",
				"summary": [""],
				"editions": [
					{
						"publisher": "Kids Can Press",
						"pub_info": "Toronto: Kids Can Press, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Winter Epigrams and Epigrams to Ernesto Cardenal in Defence of Claudia",
				"summary": [""],
				"editions": [
					{
						"publisher": "Williams-Wallace",
						"pub_info": "Toronto: Williams-Wallace, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983", "title": "Primitive Offensive",
				"summary": [""],
				"editions": [
					{
						"publisher": "Williams-Wallace",
						"pub_info": "Toronto: Williams-Wallace, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Chronicles of the Hot Sun",
				"summary": [
					"Poems written during the author's ten-month sojourn in Free Grenada."
				],
				"editions": [
					{
						"publisher": "Williams-Wallace",
						"pub_info": "Toronto: Williams-Wallace [1984]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Sight Specific: Lesbians & Representation (Contributor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "A. Space",
						"pub_info": "[Toronto: A. Space, 1988]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Sans Souci and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Williams-Wallace",
						"pub_info": "Stratford, Ontario: Williams-Wallace, 1988."
					},
					{
						"publisher": "Firebrand Books",
						"pub_info": "Firebrand Books, 1989. (Hardcover)"
					},
					{
						"publisher": "Firebrand Books",
						"pub_info": "Firebrand Books, 1989. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "No Language Is Neutral",
				"summary": [""],
				"editions": [
					{
						"publisher": "Coach House Press",
						"pub_info": "Toronto: Coach House Press, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "No Burden to Carry: Narratives of Black Working Women in Ontario 1920s to 1950s",
				"summary": [""],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "Toronto: Women's Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Bread Out of Stone: Recollections, Sex, Recognitions, Race, Dreaming, Politics",
				"summary": [""],
				"editions": [
					{
						"publisher": "Coach House Press",
						"pub_info": "Toronto: Coach House Press, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "In Another Place, Not Here",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "Toronto: Knopf, 1996."
					},
					{
						"publisher": "Grove Press",
						"pub_info": "New York: Grove Press [1997]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Land to Light On (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "McClelland & Stewart",
						"pub_info": "Toronto: McClelland & Stewart, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "At the Full and Change of the Moon",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "Toronto: Knopf, 1999."
					},
					{
						"publisher": "Grove Press",
						"pub_info": "New York: Grove Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "A Map to the Door of No Return: Notes to Belonging",
				"summary": [""],
				"editions": [
					{
						"publisher": "Doubleday Canada",
						"pub_info": "Toronto: Doubleday Canada, 2001."
					},
					{
						"publisher": "Vintage Canada",
						"pub_info": "Toronto: Vintage Canada, 2002. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Brathwaite",
		"first_name": "J. Ashton",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Niggers, This is Canada",
				"summary": [""],
				"editions": [
					{
						"publisher": "21st Century Books",
						"pub_info": "Toronto: 21st Century Books, 1971."
					}
				]
			}
		]
	},
	{
		"last_name": "Brathwaite",
		"first_name": "Kamau",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1930",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Kamau Brathwaite was born in Barbados in 1930. He graduated from England's Cambridge University with a B.A. in history in his early 20s, and received his Ph.D. from the University of Sussex in 1968. He lived and worked in Ghana from 1955 to 1962. From the 'rooflessness' of his sojourn in Europe, Brathwaite found a rootedness in Africa that would sharpen his sense of 'wholeness' and shape his awareness, making him what the Ghanaian poet Kofi Awoonor once called 'a poet of the total African consciousness.' The Arrivants: A New World Trilogy (1973) and the second trilogy, Mother Poem (1977), Sun Poem (1982) and X/Self (1987) are among Brathwaite's published works that surged his international standing.",
			"Brathwaite, the distinguished Caribbean poet, historian and literary critic, lives in Barbados at Cow Pastor, part of an estate that includes the sacred burial ground of his ancestors that were enslaved. He has taught at the University of the West Indies and lectured at New York University. Awards and honors for his poetry and non-fiction include the Guggenheim Fellowship, Fulbright Fellowship, Bussa Award, Casa de las Americas Prize for Literary Criticism, and the Neustadt International Prize for Literature."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Sappho Sakyi's Meditations",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou Publications",
						"pub_info": "Savacou Publications, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Shar",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou Publications",
						"pub_info": "Savacou Publications, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Rights of Passage",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London and New York: Oxford University Press, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Islands",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London: Oxford University Press, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Arrivants: A New World Trilogy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London: Oxford University Press, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Black + Blues (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Casa de las Americas",
						"pub_info": "Habana: Casa de las Americas, 1976."
					},
					{
						"publisher": "New Directions",
						"pub_info": "[New York] New Directions [1995]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Mother Poem",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "Oxford: Oxford University Press, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Development of Creole Society in Jamaica, 1770-1820",
				"summary": [""],
				"editions": [
					{
						"publisher": "Clarendon Press",
						"pub_info": "Clarendon Press, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Word Making Man",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou",
						"pub_info": "Kingston, Savacou Cooperative, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Soweto",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1979"
					},
					{
						"publisher": "Savacou Publications",
						"pub_info": "Kingston: Savacou Publications [1988]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Sun Poem",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "Oxford: Oxford University Press, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Other Exiles",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "Oxford University Press, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?", "title": "Third World Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Longman, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "History of the Voice: The development of nation language in Anglophone Caribbean poetry",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "New Beacon, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?", "title": "The Folk Culture of the Slaves in Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "New Beacon, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Jah Music",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou",
						"pub_info": "Kingston: Savacou, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Roots: Essay",
				"summary": [""],
				"editions": [
					{
						"publisher": "Casa De Las Americas",
						"pub_info": "Habana: Casa De Las Americas, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "X/Self",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1987"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Middle Passages",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bloodaxe Books",
						"pub_info": "Newcastle: Bloodaxe Books [1992]."
					},
					{
						"publisher": "New Directions",
						"pub_info": "New York: New Directions, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Roots",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Michigan Press",
						"pub_info": "University of Michigan Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Zea Mexican Diary: 7 Sept 1926-7 Sept 1986",
				"summary": [
					"The most personal publication of the great Caribbean poet and cultural critic, The Zea Mexican Diary is a collection of intensely impassioned and griefstricken excerpts from Kamau Brathwaite's diary during the period in 1986 after he learned that his wife, Doris, was dying of cancer and had only a short time to live. (Annotation copyright Book News, Inc., Portland, OR)"
				],
				"editions": [
					{
						"publisher": "University of Michigan Press",
						"pub_info": "Madison: University of Wisconsin Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Trench Town Rock",
				"summary": [
					"St. Lucian/Trinidad & Tobagoian poet Derek Walcott may have his Nobel Prize, but you have to read Kamau Brathwaite to learn the daily truth about violence and injustice in the Caribbean. Expanded from the original poem which appeared in Hambone 10 in 1991. (Annotation copyright Book News, Inc., Portland, OR)"
				],
				"editions": [
					{
						"publisher": "Lost Roads",
						"pub_info": "Providence: Lost Roads, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Dreamstories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Harlow, Essex: Longman, 1994."
					},
					{
						"publisher": "Addison-Wesley",
						"pub_info": "Addison-Wesley, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Barabajan Poems 1492-1992",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou North/Kamau Brathwaite",
						"pub_info": "Savacou North/Kamau Brathwaite, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Conversations with Nathaniel Mackey",
				"summary": [""],
				"editions": [
					{
						"publisher": "We Press",
						"pub_info": "New York: We Press, 1999. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Words Need Love Too",
				"summary": [
					"Words Need Love Too represents, perhaps, Kamau Brathwaite's most concentrated effort at fashioning a new literary tradition out of the fragmented pieces/rhythms/nation languages that form the New World. No other poet, living or dead, makes us participants in, and co-celebrants of the liturgy of the word, like Brathwaite."
				],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 2000. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Ancestors",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Directions",
						"pub_info": "New York: New Directions, 2001. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Brodber",
		"first_name": "Erna",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1940",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Jane and Louisa Will Soon Come Home",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "A Study of Yards in the City of Kingston",
				"summary": [""],
				"editions": [
					{
						"publisher": "Inst of Social & Economic Research, University of the West Indies",
						"pub_info": "Mona: Inst of Social & Economic Research, University of the West Indies, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Myal",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Louisiana",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon, 1994."
					},
					{
						"publisher": "University Press of Mississippi",
						"pub_info": "Jackson: University Press of Mississippi, 1997. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Broomes",
		"first_name": "Horace",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Fireflies from Fireworks",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "New York: Vantage, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?", "title": "Skeletons of the System: The framework of democracy in Trinidad and Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenleaf Enterprises",
						"pub_info": "Greenleaf Enterprises, ????"
					}
				]
			}
		]
	},
	{
		"last_name": "Brown",
		"first_name": "Lloyd W.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Lloyd Brown was born in Jamaica. He graduated from the University of the West Indies and emigrated to Canada where he did graduate work and taught before moving to the United States. He was Professor of Comparative Literature at the University of Southern California for many years. He has written numerous articles for European, North American and Caribbean journals."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Black Writer in Africa and the Americas",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hennessey & Ingalls",
						"pub_info": "Los Angeles: Hennessey & Ingalls, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "West Indian Poetry",
				"summary": [
					"The first such survey in this field, which focuses on the work of McKay, Walcott and Brathwaite."
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Heinemann, 1978."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "Heinemann, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Women Writers in Black Africa",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenwood Publishing",
						"pub_info": "Westport, CT: Greenwood Publishing, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "El Dorado and Paradise: Canada and the Caribbean in Austin Clarke's Fiction",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Western Ontario",
						"pub_info": "London, ON: University of Western Ontario, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Duppies (Poems)",
				"summary": [
					"Brown's memories of childhood in rural Jamaica, the twilight world of duppies and rolling calf and minds inhabiting both Protestantism and obeah, comes to represent ancestry and spiritual continuity as a line of defence against cultural homogenisation."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Brown",
		"first_name": "Stewart",
		"birth_city": "",
		"birth_country": "England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1951",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Stewart Brown was born in Southampton, U.K., in 1951. A frequent and much respected visitor to the Caribbean, much liked for his deep but modestly offered knowledge of the region and its literature, and his aimiable good humour, Stewart Brown's poetry never forgets that, however immersed it is in local sympathies, it remains the work of an Englishman abroad, an honesty which ensures that the work is never compromised by sentiment."
			],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Beasts",
				"summary": [""],
				"editions": [
					{
						"publisher": "Outposts Publications",
						"pub_info": "Walton-on-Thames: Outposts Publications, 1975"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Specimens (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sceptre Press",
						"pub_info": "Knotting: Sceptre Press [1979]. (Pamphlet; 150 numbered copies)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Caribbean Poetry Now (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hodder and Stoughton",
						"pub_info": "Hodder and Stoughton, 1984."
					},
					{
						"publisher": "Edward Arnold",
						"pub_info": "Edward Arnold, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Zinder (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Seren Books",
						"pub_info": "Seren Books, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Lugard's Bridge (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Seren Books",
						"pub_info": "Seren Books, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Voice Print (Poems edited w/Mervyn Morris and Gordon Rohlehr)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Writers from Africa",
				"summary": [""],
				"editions": [
					{
						"publisher": "Book Trust",
						"pub_info": "Book Trust, 1989"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Caribbean New Wave: Contemporary Short Stories (Editor)",
				"summary": [
					"This anthology provides readers with a sampler of the energy, commitment, and sheer brilliance of a whole new generation of Caribbean writers. Contents: James Berry (Jamaica), Miss Dorcas. Wayne Brown (Trinidad and Tobago), The Crossing. Clyde Hosein (Trinidad and Tobago), The Man at the Gate. Hazel D. Campbell (Jamaica), The Thursday Wife. Ian MacDonald (Trinidad and Tobago/Guyana), The Duel in the Mercy Ward. Rooplal Monar (Guyana), Bahadur. Jamaica Kincaid (Antigua), My Mother. Neil Bissoondath (Trinidad and Tobago/Canada), Insecurity. Opal Palmer Adisa (Jamaica), Duppy Get Her. Austin Clarke (Barbados), A Funeral. Faustin Charles (Trinidad and Tobago), Signpost of the Phoenix. Cyril Dabydeen (Guyana/Canada), Bitter Blood. Willi Chen (Trinidad and Tobago), The Stickfighter. Amryl Johnson (Trinidad and Tobago), Yardstick. Olive Senior (Jamaica), The Two Grandmothers. Lorna Goodison (Jamaica), Della Makes Life. Lawrence Scott (Trinidad and Tobago), King Sailor One J'Overt Morning. Earl Lovelace (Trinidad and Tobago), Shoemaker Arnold. Earl McKenzie (Jamaica), Fear of the Sea. Velma Pollard (Jamaica), My Mother. Jan Shienbourne (Guyana), The Maid in Bel Air."
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "The Art of Derek Walcott",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dufour",
						"pub_info": "Dufour, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Heinemann Book of Caribbean Poetry (Editor)",
				"summary": [
					"West Indians, as Ian McDonald comments, 'write poetry as well as they play cricket' and Heinemann's anthology is the most comprehensive and up-to-date selection of contemporary Caribbean poetry, including major names like Derek Walcott, John Agard, and Merle Collins, alongside new poets of the region. This collection is an invaluable academic selection and will provide a fine introduction for the general reader interested in the lyricism of Caribbean poetry. (Publisher's blurb)"
				],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heinemann, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Caribbean New Voices 1: A Forum for Caribbean Writing (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Longman, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Art of Kamau Brathwaite",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dufour",
						"pub_info": "Dufour, 1996."
					},
					{
						"publisher": "Dufour",
						"pub_info": "Dufour, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "All Are Involved: The Art of Martin Carter",
				"summary": [
					"This critical anthology offers a long overdue evaluation of the work of this major Caribbean poet from contemporaries such as Lamming, Walcott and Brathwaite, from the region's leading critics and from younger writers who acknowledge Carter's influence."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Elsewhere (Poems)",
				"summary": [
					"Elsewhere brings together, frequently in much revised form, the best work from his earlier much praised collections (Mekin Foolishness, Zinder and Lugard's Bridge) with many new poems. The long sequence 'Elsewhere', which brings Brown's painterly eye and witty humanity to the experience of living in the Caribbean, and 'Elmina', a moving and imaginative meditation on an Englishman's sense of complicity in the history of the slave trade, will further enhance his reputation."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Buffong",
		"first_name": "Jean",
		"birth_city": "",
		"birth_country": "Grenada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Jump-Up-And-Kiss-Me: Two Stories From Grenada",
				"summary": [""],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "[London] Women's Press [1990]. (Paperback)"
					},
					{
						"publisher": "Women's Press",
						"pub_info": "London: Women's Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Under the Silk Cotton Tree",
				"summary": [""],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "London: Women's Press, 1992."
					},
					{
						"publisher": "Interlink Books",
						"pub_info": "New York: Interlink Books [1993]."
					},
					{
						"publisher": "Interlink Books",
						"pub_info": "New York: Interlink Books, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Snowflakes in the Sun",
				"summary": [""],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "[London: Women's Press, 1995]. (Paperback)"
					},
					{
						"publisher": "Trafalgar Square",
						"pub_info": "Trafalgar Square, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Callender",
		"first_name": "Timothy",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1946",
		"death_day": "",
		"death_month": "",
		"death_year": "1989",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "It So Happen",
				"summary": [
					"A collection of 16 short stories. Saga-boy and Jasper prepare for a grand stick-fight, Big Joe will do anything to marry the girl he loves, all the men are determined to defeat Marie in the rum drinking competition, and PaJohn the Obeah Man is foiled by his own wicked spell. Timothy Callender's close-knit community is full of zany characters. Their dialect, the troubles they face, and the celebrations they share, are realistic and overflowing with great humor. (Heinemann blurb)"
				],
				"editions": [
					{
						"publisher": "Christian Journals",
						"pub_info": "Belfast: Christian Journals, 1975."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "[London] Heinemann [1991]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "The Elements of Art",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately printed",
						"pub_info": "Barbados: [Privately printed], 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "The Watchman: A Photo-Novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately printed",
						"pub_info": "Barbados: [Privately printed], 19??."
					},
					{
						"publisher": "Heinemann Educational Books",
						"pub_info": "Heinemann Educational Books, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Schoolboys: A Photo-Novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Privately printed",
						"pub_info": "Barbados: [Privately printed], 19??."
					},
					{
						"publisher": "Heinemann Educational Books",
						"pub_info": "Heinemann Educational Books, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "How Music Came to the Ainchan People",
				"summary": [""],
				"editions": [
					{
						"publisher": "Callender's Books & Art",
						"pub_info": "Barbados: Callender's Books & Art [1979]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Two Barbadian Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Realization Studio",
						"pub_info": "Barbados: Realization Studio, 1987. (Pamphlet)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Independence and Freedom: A Story, an Essay and a Drama",
				"summary": [""],
				"editions": [
					{
						"publisher": "Realization Studio",
						"pub_info": "Barbados: Realization Studio, 1987. (Pamphlet)"
					}
				]
			}
		]
	},
	{
		"last_name": "Cambeira",
		"first_name": "Alan Belén",
		"birth_city": "",
		"birth_country": "Dominican Republic",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Alan Cambeira was born in Samaná, República Domincana. With his family he immigrated first to Barbados, then to New York and later to Pennsylvania. In addition to being a university professor, Alan Cambeira has published numerous articles, commentaries and essays in both Spanish and English about various aspects of Caribbean culture."
		],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Azucar! The Story of Sugar",
				"summary": [
					"'...A brilliant first novel which reveals the visionary history of a Caribbean island with an intensity and originality that dares place it alongside Lovelace, Danticat, Marshall, and Alvarez.' The Nation (Bridgetown, Barbados)"
				],
				"editions": [
					{
						"publisher": "Belecam & Associates",
						"pub_info": "Belecam & Associates, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Cambridge",
		"first_name": "E.M.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Feet of Clay",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1944"
					},
					{
						"publisher": "Scope Publishing",
						"pub_info": "Port-of-Spain: Scope Publishing, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Cambridge",
		"first_name": "Joan",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Clarise Cumberbatch Want to Go Home",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ticknor & Fields",
						"pub_info": "New York: Ticknor & Fields, 1987."
					},
					{
						"publisher": "Women's Press",
						"pub_info": "London: Women's Press, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Campbell",
		"first_name": "Hazel Dorothy",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1940",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"Hazel Campbell was born in Jamaica in 1940. She attended Merl Grove High School and obtained a BA in English and Spanish at UWI, Mona, followed by Diplomas in Mass Communications and Management Studies. She has worked as a teacher, as a public relations worker, editor, features writer and video producer for the Jamaican Information Service, the Ministry of Foreign Affairs and the Creative Production and Training Centre. From 1987 she has worked as a freelance Communications Consultant."
		],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Rag Doll and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou Co-operative",
						"pub_info": "Kingston: Savacou Co-operative, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Woman's Tongue (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou Co-operative",
						"pub_info": "Kingston: Savacou Co-operative, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Singerman",
				"summary": [
					"Realistic and magical, sombre and deeply comic, heroic and full of ironies, these stories explore the complexities of Jamaican reality through a variety of voices and forms, drawing connections between the slave past and contemporary gang warfare."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Tilly Bummie and Other Stories: Life in Jamaican Country and Town",
				"summary": [""],
				"editions": [
					{
						"publisher": "Kingston Publishers",
						"pub_info": "Kingston: Kingston Publishers, 1993"
					},
					{
						"publisher": "LMH Publishing",
						"pub_info": "Kingston: LMH Publishing, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Ramgoat Dashalong: Magical Tales from Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "LMH Publishing",
						"pub_info": "Kingston: LMH Publishing, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Campbell",
		"first_name": "W.A.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1907",
				"title": "Marguerite: A Story of the Earthquake",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Times Printery",
						"pub_info": "Kingston: The Times Printery, 1907."
					}
				]
			}
		]
	},
	{
		"last_name": "Carew",
		"first_name": "Jan",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1925",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Black Midas",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1958."
					},
					{
						"publisher": "Coward-McCann",
						"pub_info": "New York: Coward-McCann, 1958. (Under the title 'A Touch of Midas')"
					},
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1969."
					},
					{
						"publisher": "Passeggiata Press",
						"pub_info": "Passeggiata Press, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Wild Coast",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1958."
					},
					{
						"publisher": "Periodicals Service Co.",
						"pub_info": "Periodicals Service Co., 1958."
					},
					{
						"publisher": "Kraus Reprint",
						"pub_info": "Nendeln: Kraus Reprint, 1972. (Reprint of the 1958 London edition. Cloth, w/o dust jacket.)"
					},
					{
						"publisher": "Longman",
						"pub_info": "Harlow, Essex: Longman, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "The Last Barbarian",
				"summary": [
					"A student from Guyana is awarded a scholarship to study in Moscow."
				],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Moscow Is Not My Mecca",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Green Winter",
				"summary": [
					"The American edition of <em>Moscow Is Not My Mecca</em>."
				],
				"editions": [
					{
						"publisher": "Stein and Day",
						"pub_info": "New York: Stein and Day, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "The Third Gift",
				"summary": [
					"A folktale of Africa."
				],
				"editions": [
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston: Little, Brown, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Save the Last Dance for Me",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "The Children of the Sun",
				"summary": [""],
				"editions": [
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston: Little, Brown, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Grenada: The Hour Will Strike Again",
				"summary": [""],
				"editions": [
					{
						"publisher": "International Organization of Journalists",
						"pub_info": "Prauge: International Organization of Journalists, 1985. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Fulcrums of Change: Origins of Racism in the Americas and Other Essays",
				"summary": [""],
				"editions": [
					{
						"publisher": "Africa World Press",
						"pub_info": "Africa World Press, 1988. (Cloth)"
					},
					{
						"publisher": "Africa World Press",
						"pub_info": "Africa World Press, 1988. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Ghosts in Our Blood: With Malcolm X in Africa, England, and the Caribbean",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lawrence Hill Books",
						"pub_info": "[Chicago] Lawrence Hill Books [1994]. (Cloth)"
					},
					{
						"publisher": "Lawrence Hill Books",
						"pub_info": "[Chicago] Lawrence Hill Books [1994]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Rape of Paradise",
				"summary": [""],
				"editions": [
					{
						"publisher": "A & B Books Publishers",
						"pub_info": "Brooklyn: A & B Books Publishers, 1994. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Cargill",
		"first_name": "Morris",
		"birth_city": "",
		"birth_country": "Jamaica/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Ian Fleming Introduces Jamaica (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Deutsch",
						"pub_info": "London: Deutsch, 1965."
					},
					{
						"publisher": "Novelty Trading Co.",
						"pub_info": "Jamaica: Novelty Trading Co., 1965."
					},
					{
						"publisher": "Hawthorne",
						"pub_info": "New York: Hawthorne, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Fever Grass",
				"summary": [
					"A thriller co-authored with John Hearne and published under the pseudonym John Morris."
				],
				"editions": [
					{
						"publisher": "Collins and Sangster",
						"pub_info": "[London/Kingston] Collins and Sangster, 1969."
					},
					{
						"publisher": "G.P. Putnam's Sons",
						"pub_info": "New York: G.P. Putnam's Sons, 1969."
					},
					{
						"publisher": "Berkley",
						"pub_info": "New York: Berkley, 1971. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Candywine Development",
				"summary": [
					"A thriller co-authored with John Hearne and published under the pseudonym John Morris."
				],
				"editions": [
					{
						"publisher": "Collins and Sangster",
						"pub_info": "[London/Kingston] Collins and Sangster, 1970."
					},
					{
						"publisher": "Citadel Press",
						"pub_info": "Secaucus. N.J.: Citadel Press [1971]."
					},
					{
						"publisher": "Dell",
						"pub_info": "New York: Dell, 1974. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Checkerboard Caper",
				"summary": [
					"A thriller co-authored with John Hearne and published under the pseudonym John Morris."
				],
				"editions": [
					{
						"publisher": "Citadel Press",
						"pub_info": "Secaucus. N.J.: Citadel Press [1975]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "A Gallery of Nazis",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lyle Stuart",
						"pub_info": "Secaucus, NJ: Lyle Stuart, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Jamaica Farewell",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lyle Stuart",
						"pub_info": "Secaucus, NJ: Lyle Stuart, 1978."
					},
					{
						"publisher": "Cinnamon Books",
						"pub_info": "N.J: Cinnamon Books, 1979."
					},
					{
						"publisher": "Barricade Books",
						"pub_info": "Barricade Books, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Morris Cargill: A selection of his writings in the Gleaner, 1952-1985",
				"summary": [""],
				"editions": [
					{
						"publisher": "Topical Publishers",
						"pub_info": "Topical Publishers."
					}
				]
			}
		]
	},
	{
		"last_name": "Carnegie",
		"first_name": "James",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [
			"James Carnegie was born in Jamaica, where he is Vice-Principal of Jamaica College."
		],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Wages Paid",
				"summary": [
					"An historical novel set on a plantation, revealing the relationships between the plantation owner and his slaves."
				],
				"editions": [
					{
						"publisher": "Casa de las Americas",
						"pub_info": "Havana: Casa de las Americas, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "The People Who Came",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman Caribbean",
						"pub_info": "Essex: Longman Caribbean, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Carpentier",
		"first_name": "Alejo",
		"birth_city": "",
		"birth_country": "Cuba",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1904",
		"death_day": "",
		"death_month": "",
		"death_year": "1980",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "The Lost Steps",
				"summary": [""],
				"editions": [
					{
						"publisher": "Victor Gollancz",
						"pub_info": "London: Victor Gollancz, 1956."
					},
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 1956."
					},
					{
						"publisher": "Noonday",
						"pub_info": "New York: Noonday, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "The Kingdom of This World",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 1957."
					},
					{
						"publisher": "Macmillan",
						"pub_info": "Macmillan, 1971."
					},
					{
						"publisher": "The Limited Editions Club",
						"pub_info": "New York: The Limited Editions Club [1988]."
					},
					{
						"publisher": "Noonday",
						"pub_info": "New York: Noonday, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "Explosion in a Cathedral",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1962"
					},
					{
						"publisher": "Victor Gollancz",
						"pub_info": "London: Victor Gollancz, 1963."
					},
					{
						"publisher": "Noonday",
						"pub_info": "New York: Noonday, 1989. (Paperback)"
					},
					{
						"publisher": "Minerva",
						"pub_info": "[London] Minerva [1991]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "War of Time (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Victor Gollancz",
						"pub_info": "London: Victor Gollancz, 1970."
					},
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Baroque Concerto",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1974."
					},
					{
						"publisher": "Council Oaks Books",
						"pub_info": "Council Oaks Books, 1988. (Paperback)"
					},
					{
						"publisher": "Andre Deutsch",
						"pub_info": "[London] Andre Deutsch [1991]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Reasons of State",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 1976."
					},
					{
						"publisher": "Victor Gollancz",
						"pub_info": "London: Victor Gollancz, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Harp and the Shadow",
				"summary": [""],
				"editions": [
					{
						"publisher": "Letras Cubanas",
						"pub_info": "Havana: Letras Cubanas, 1979."
					},
					{
						"publisher": "Mercury House",
						"pub_info": "San Francisco: Mercury House [1990]. (Cloth)"
					},
					{
						"publisher": "Mercury House",
						"pub_info": "San Francisco: Mercury House, 1992. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989", "title": "The Chase",
				"summary": [""],
				"editions": [
					{
						"publisher": "Farrar Straus & Giroux",
						"pub_info": "New York: Farrar Straus & Giroux, 1989."
					},
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "Carter",
		"first_name": "Martin",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1927",
		"death_day": "",
		"death_month": "",
		"death_year": "1997",
		"bio": [
			"<strong>Martin Wylde Carter</strong> was born in 1927 in Georgetown, British Guiana. His family, of mixed African, Indian and European ancestry, was part of the coloured middle class. His father was a civil servant, a reader and discusser of philosophy and mother also a lover of books and reciting verse. Martin Carter attended the prestigious Queen’s College between 1939 and 1945."
		],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "The Hill of Fire glows Red",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Miniature Poets",
						"pub_info": "British Guiana: The Miniature Poets, 1951."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "The Kind Eagle (Poems of Prison)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1952"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "The Hidden Man (Other Poems of Prison)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1952"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Returning",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1953"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "Poems of Resistance",
				"summary": [
					"Written out of the author's experiences of the anti-colonial struggle which included his imprisonment by the British for his political activities."
				],
				"editions": [
					{
						"publisher": "Lawrence and Wishart",
						"pub_info": "Great Britain: Lawrence and Wishart 1954."
					},
					{
						"publisher": "University of Guyana",
						"pub_info": "University of Guyana, 1966."
					},
					{
						"publisher": "Release Publication",
						"pub_info": "Georgetown, Guyana: Release Publication, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Poems of Succession",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon Books",
						"pub_info": "New Beacon Books, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Poems of Affinity 1978-1980",
				"summary": [""],
				"editions": [
					{
						"publisher": "Release Publishers",
						"pub_info": "[Georgetown, Guyana] Release Publishers [1980]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Selected Poems",
				"summary": [
					"This book was the Guyana 1989 Poetry First Prize Winner. Includes an introduction by Ian McDonald."
				],
				"editions": [
					{
						"publisher": "Demerara Publishers",
						"pub_info": "Georgetown, Guyana: Demerara Publishers, 1989."
					},
					{
						"publisher": "Red Thread Press",
						"pub_info": "Red Thread Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Martin Carter Selected Poems / Poesías Escogidas",
				"summary": [
					"This dual language selection of Martin Carter's poems, edited by David Dabydeen, translated into Spanish by Salvador Ortiz-Carbonares and with an introduction by Gemma Robinson, will establish very clearly that Carter is a major South American poet, in the company of Valejo, Neruda and Paz."
				],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Chamoiseau",
		"first_name": "Patrick",
		"birth_city": "",
		"birth_country": "Martinique",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Chronicle of the Seven Sorrows",
				"summary": [""],
				"editions": [
					{
						"publisher": "Folio",
						"pub_info": "Paris: Folio, 1992."
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Solibo Magnifique",
				"summary": [""],
				"editions": [
					{
						"publisher": "Gallimard",
						"pub_info": "Paris: Gallimard, 1988."
					},
					{
						"publisher": "Pantheon",
						"pub_info": "New York: Pantheon [1997]."
					},
					{
						"publisher": "Granta",
						"pub_info": "London: Granta, [2000]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Creole Folktales",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Press",
						"pub_info": "New York: New Press, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "School Days : Chemin-D'Ecole",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1997."
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Texaco",
				"summary": ["Winner of the 1992 Prix Goncourt, France's most prestigious literary prize."],
				"editions": [
					{
						"publisher": "Editions Gallimard",
						"pub_info": "Paris: Editions Gallimard, 1992."
					},
					{
						"publisher": "Pantheon",
						"pub_info": "New York: Pantheon [1997]."
					},
					{
						"publisher": "Granta",
						"pub_info": "London: Granta, [1997]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Seven Dreams of Elmira",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "France, 1998."
					},
					{
						"publisher": "Zoland Books",
						"pub_info": "Cambridge, MA: Zoland Books, [1999]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Childhood",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Metiers Creoles Tracees De Melancolies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hazan",
						"pub_info": "Paris: Hazan, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Biblique Des Derniers Gestes",
				"summary": [""],
				"editions": [
					{
						"publisher": "Gallimard",
						"pub_info": "Paris: Gallimard, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Chan",
		"first_name": "Brian",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1949",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Brian Chan was born in Guyana in 1949. He began to establish a reputation as a poet of talent with his work in Expression in the early 1970s, part of a group that included Janice Lowe (Shinebourne) and N.D. Williams. He had poems published in Caribbean Quarterly, Artrage, and One People’s Grief and is included in the Heinemann anthology of Caribbean poetry. He is a musician (clarinetist) and accomplished painter. He works as an art gallery curator."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Thief With Leaf",
				"summary": ["Winner of the 1989 Guyana prize, this collection of poems, which constantly illuminate the moments of everyday living, established Chan as one of the Caribbean’s most individual and original younger poets."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Fabula Rasa",
				"summary": ["From a Canadian present and a Guyanese past, these poems question all fictions, whether of the everyday or of ultimate reality. Whilst staring into the abyss, these poems also celebrate the power of love and moments 'brimming with light'."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Chapman",
		"first_name": "Esther",
		"birth_city": "",
		"birth_country": "England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1904",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1927",
				"title": "Punch and Judy: A Comedy of Living",
				"summary": [""],
				"editions": [
					{
						"publisher": "Constable",
						"pub_info": "London: Constable, 1927."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1928",
				"title": "Study in Bronze",
				"summary": [""],
				"editions": [
					{
						"publisher": "Constable",
						"pub_info": "London: Constable, 1928."
					},
					{
						"publisher": "Chantry Publications",
						"pub_info": "London: Chantry Publications, 1952."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1939",
				"title": "Pied Piper",
				"summary": [""],
				"editions": [
					{
						"publisher": "Duckworth",
						"pub_info": "London: Duckworth, 1939."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Pleasure Island: The Book of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "Arawak Press",
						"pub_info": "Kingston: Arawak Press, 1952."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Too Much Summer: A Novel of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "Chantry Publications",
						"pub_info": "London: Chantry Publications, 1953."
					}
				]
			}
		]
	},
	{
		"last_name": "Charles",
		"first_name": "Faustin",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Expatriate: Poems 1963-1968",
				"summary": [""],
				"editions": [
					{
						"publisher": "Brookside Press",
						"pub_info": "London: Brookside Press, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Crab Track",
				"summary": [""],
				"editions": [
					{
						"publisher": "Brookside Press",
						"pub_info": "London: Brookside Press, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Signposts of the Jumbie",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bogle-l'Ouverture",
						"pub_info": "London: Bogle-l'Ouverture, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Black Magic Man of Brixton",
				"summary": [""],
				"editions": [
					{
						"publisher": "Karnak House",
						"pub_info": "London: Karnak House, 1985."
					},
					{
						"publisher": "Zed Books",
						"pub_info": "Zed Books, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Days and Nights in the Magic Forest",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bogle-l'Ouverture",
						"pub_info": "London: Bogle-l'Ouverture, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Under the Storyteller's Spell (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Viking Kestrel",
						"pub_info": "London: Viking Kestrel, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "A Caribbean Counting Book",
				"summary": [""],
				"editions": [
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "Boston: Houghton Mifflin, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "The Selfish Crocodile",
				"summary": [""],
				"editions": [
					{
						"publisher": "Little Tiger Press",
						"pub_info": "Waukesha, WI: Little Tiger Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Teacher Alligator (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bloomsbury",
						"pub_info": "Bloomsbury, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Chen ",
		"first_name": "Willi",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "King of the Carnival and Other Stories",
				"summary": ["A collection of short stories from the Caribbean, capturing the violence, trickery, pathos and racial comedy of Trinidad & Tobagoian society. (Callaloo, Vol. 15, No. 1)"],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "London: Hansib, 1988."
					},
					{
						"publisher": "Calaloux Publications",
						"pub_info": "Calaloux Publications, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Clarke",
		"first_name": "A.M.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Revolution at Grass Roots",
				"summary": [""],
				"editions": [
					{
						"publisher": "Educo Press",
						"pub_info": "Port-of-Spain: Educo Press, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Caribbean Coup",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Voices",
						"pub_info": "Trinidad & Tobago: New Voices, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Black and White Lovers By Ritual",
				"summary": [""],
				"editions": [
					{
						"publisher": "Express",
						"pub_info": "Trinidad & Tobago: Express, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Clarke",
		"first_name": "Austin C.",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1934",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "The Survivors of the Crossing",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1964."
					},
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "Toronto: McClelland and Stewart, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Amongst Thistles and Thorns",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1965."
					},
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "Toronto: McClelland and Stewart, 1965."
					},
					{
						"publisher": "Mollodaia gvardia",
						"pub_info": "Moskva: Mollodaia gvardia, 1972."
					},
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "Toronto: McClelland and Stewart, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Meeting Point",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1967."
					},
					{
						"publisher": "Macmillan",
						"pub_info": "Toronto: Macmillan, 1967."
					},
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston: Little, Brown and Company [1972]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Confessed Bewilderment of Martin Luther King and the Idea of Non-Violence as a Political Tactic",
				"summary": [""],
				"editions": [
					{
						"publisher": "Al Kitab Sudan",
						"pub_info": "Burlington, Ontario: Al Kitab Sudan, 1968. (Pamphlet)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "When He Was Free and Young and He Used to Wear Silks",
				"summary": [""],
				"editions": [
					{
						"publisher": "Anansi",
						"pub_info": "Toronto: Anansi, 1971."
					},
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston: Little, Brown and Company, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Storm of Fortune",
				"summary": [""],
				"editions": [
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston/Toronto: Little, Brown and Company [1973]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Bigger Light",
				"summary": [""],
				"editions": [
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston/Toronto: Little Brown and Company, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "The Prime Minister",
				"summary": [""],
				"editions": [
					{
						"publisher": "General Publishing Co",
						"pub_info": "Don Mills, Ontario: General Publishing Co., 1977."
					},
					{
						"publisher": "Kegan Paul",
						"pub_info": "London: Routledge & Kegan Paul, 1978."
					},
					{
						"publisher": "Paperjacks",
						"pub_info": "Markham, Ontario: Paperjacks, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Growing Up Stupid Under the Union Jack",
				"summary": [""],
				"editions": [
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "[Toronto] McClelland and Stewart [1980]."
					},
					{
						"publisher": "Casa de las Americas",
						"pub_info": "Havana: Casa de las Americas, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "When Women Rule",
				"summary": [""],
				"editions": [
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "Toronto: McClelland and Stewart, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Nine Men Who Laughed",
				"summary": ["A collection of 9 short stories, with an introduction by the author."],
				"editions": [
					{
						"publisher": "Penguin",
						"pub_info": "[Markham, Ontario] Penguin Books [1986]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Proud Empires",
				"summary": [""],
				"editions": [
					{
						"publisher": "Victor Gollancz",
						"pub_info": "London: Victor Gollancz, 1986."
					},
					{
						"publisher": "Penguin",
						"pub_info": "Markham, Ontario: Penguin, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "In This City",
				"summary": [""],
				"editions": [
					{
						"publisher": "Exile Editions",
						"pub_info": "Toronto: Exile Editions, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Public Enemies: Police Violence and Black Youth",
				"summary": [""],
				"editions": [
					{
						"publisher": "Harper-Collins",
						"pub_info": "Toronto: Harper-Collins, 1992. (Pamphlet)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "There Are No Elders",
				"summary": [""],
				"editions": [
					{
						"publisher": "Exile Editions",
						"pub_info": "Toronto: Exile Editions, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "A Passage Back Home: A Personal Reminiscence of Sam Selvon",
				"summary": [""],
				"editions": [
					{
						"publisher": "Exile Editions",
						"pub_info": "Toronto: Exile Editions, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Origin of Waves",
				"summary": [""],
				"editions": [
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "Toronto: McClelland and Stewart, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Pig Tails 'n Breadfruit",
				"summary": [""],
				"editions": [
					{
						"publisher": "The New Press",
						"pub_info": "New York: The New Press, [1999]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "The Question",
				"summary": [""],
				"editions": [
					{
						"publisher": "McClelland and Stewart",
						"pub_info": "[Toronto] McClelland and Stewart [1999]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "The Polished Hoe",
				"summary": ["A novel set in the post-colonial West Indian island of Bimshire in the thirties and forties, 'The Polished Hoe' unravels over the course of twenty-four hours, but spans the lifetime of one woman and the collective experience of a society characterized by slavery. Winner of the 2002 Giller Prize and the 2003 Commonwealth Writers Prize Best Book Award for the Canada and Caribbean region. Also shared winner (along with Nino Ricci for 'Testament') of Ontario's Trillium Prize."],
				"editions": [
					{
						"publisher": "Thomas Allen",
						"pub_info": "Toronto: Thomas Allen, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Cliff",
		"first_name": "Michelle",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1956",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Claiming an Identity They Taught Me to Despise",
				"summary": [""],
				"editions": [
					{
						"publisher": "Persephone Press",
						"pub_info": "Watertown, MA: Persephone Press, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Abeng",
				"summary": ["Set in 1958 Jamaica, the novel tells of Clare Savage, a light-skinned twelve-year-old, middle class girl growing up amid the contridictions of race, class, and history in a colonized country. (Callaloo, Vol. 15, No. 1)"],
				"editions": [
					{
						"publisher": "Crossing Press",
						"pub_info": "Trumansburg, NY: Crossing Press, 1984."
					},
					{
						"publisher": "Dutton",
						"pub_info": "New York: Dutton, 1990."
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin, 1991."
					},
					{
						"publisher": "Plumsock Mesoamerican Studies",
						"pub_info": "Plumsock Mesoamerican Studies, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Land of Look Behind: Prose and Poetry",
				"summary": [""],
				"editions": [
					{
						"publisher": "Firebrand Books",
						"pub_info": "Ithaca, NY: Firebrand Books, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "No Telephone to Heaven",
				"summary": ["The story of Clare Savage's quest for spiritual integrity in Jamaica. (Callaloo, Vol. 15, No. 1)"],
				"editions": [
					{
						"publisher": "Dutton",
						"pub_info": "New York: Dutton, 1987."
					},
					{
						"publisher": "Methuen",
						"pub_info": "London: Methuen, 1988."
					},
					{
						"publisher": "Vintage",
						"pub_info": "New York: Vintage Books, 1989."
					},
					{
						"publisher": "Plume",
						"pub_info": "Plume, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Bodies of Water",
				"summary": ["A collection of short stories, all but one set in the United States. The stories examine aspects of contemporary life in the States, including AIDS, the legacy od Viet Nam, and racial inequities, all seen through the eyes of one who has adopted the U.S. as her home. (Callaloo, Vol. 15, No. 1)"],
				"editions": [
					{
						"publisher": "Methuen",
						"pub_info": "New York: Methuen, 1990."
					},
					{
						"publisher": "Dutton",
						"pub_info": "New York: Dutton, 1990. (Paperback)"
					},
					{
						"publisher": "Plume",
						"pub_info": "Plume, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Free Enterprise",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dutton",
						"pub_info": "[New York] Dutton [1993]."
					},
					{
						"publisher": "Plume/Penguin",
						"pub_info": "New York: Plume/Penguin, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "The Store of a Million Items (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "Boston: Houghton Mifflin, 1998. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Coard",
		"first_name": "Frederick McDermott",
		"birth_city": "",
		"birth_country": "Grenada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Bitter-Sweet and Spice",
				"summary": ["Memoirs of a civil servant who grew up in Grenada."],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1970"
					}
				]
			}
		]
	},
	{
		"last_name": "Collins",
		"first_name": "Merle",
		"birth_city": "",
		"birth_country": "Grenada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1950",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Merle Collins was born in 1950 in Grenada. Her primary education was in St Georges. She graduated from the University of the West Indies in Mona, Jamaica, where she took a degree in English and in Spanish. After graduating in 1972, she returned to Grenada, where she taught History and Spanish for the next two years. She has also taught in St Lucia. In 1980 she was awarded a Masters Georgetown University in Latin American Studies. She was deeply involved in the Grenadian revolution and served as a coordinator for Research on Latin America and the Caribbean for the Government of Grenada. She left Grenada in 1983."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Because the Dawn Breaks! Poems Dedicated to the Grenadian People",
				"summary": [""],
				"editions": [
					{
						"publisher": "Karia Press",
						"pub_info": "[London] Karia Press [1985]. (Cloth)"
					},
					{
						"publisher": "Karia Press",
						"pub_info": "[London] Karia Press [1985]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Watchers and Seekers: Creative Writing by Black Women in Britain (Co-Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "London: Women's Press, 1987."
					},
					{
						"publisher": "Cambridge University Press",
						"pub_info": "New York: Cambridge University Press, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Angel",
				"summary": ["I think her use of Grenadian language is one of the great emotive elements of the piece. She also manages to capture complicated aspects of our history which were not previously dealt with. Because of the use of our language she has been able to tap into psychic resources which were not tapped before. (L.Snow, May 1997)"],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "[London] Women's Press [1987]."
					},
					{
						"publisher": "Seal Press",
						"pub_info": "Seattle: Seal Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Rain Darling",
				"summary": ["Seven stories set in Grenada. A glossary of Grenadian vocabulary is included."],
				"editions": [
					{
						"publisher": "Women's Press",
						"pub_info": "London: Women's Press, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Rotten Pomerack (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Virago",
						"pub_info": "London: Virago, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "The Colour of Forgetting",
				"summary": [""],
				"editions": [
					{
						"publisher": "Virago",
						"pub_info": "[London: Virago, 1995]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Butterfly: Collected Spoken Works (Cassette tape)",
				"summary": [""],
				"editions": [
					{
						"publisher": "57 Productions",
						"pub_info": "[London] 57 Productions [1996]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "Lady in a Boat (Poems)",
				"summary": ["Twenty years after the death of the Grenadian revolution, Merle Collins writes of a Caribbean adrift, amnesiac and in danger of nihilistic despair. But she also achieves a life-enhancing and consoling perspective on those griefs."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2003."
					}
				]
			}
		]
	},
	{
		"last_name": "Collymore",
		"first_name": "Frank",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1883",
		"death_day": "",
		"death_month": "",
		"death_year": "1980",
		"bio": ["Frank Collymore was born in 1883 and he died an old respected poet, teacher, actor, artist, and short-story writer in 1980. He taught and influenced George Lamming, Frank Worrel, Austin Clarke, and Timothy Callender, helped Derek Walcott get published in Barbados, and through his editorship of BIM, the foremost literary magazine of Barbados, he earned the reputation of doyen and godfather of West Indian literature. (Source: www.heinemann.com)"],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Thirty Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Beneath the Casuarinas",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1948",
				"title": "Flotsam - Poems 1942-1948",
				"summary": [""],
				"editions": [
					{
						"publisher": "Advocate",
						"pub_info": "Bridgetown: Advocate, 1948"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "Notes for a Glossary of Words and Phrases of Barbadian Dialect",
				"summary": [""],
				"editions": [
					{
						"publisher": "Advocate Company",
						"pub_info": "Bridgetown: Advocate Company, 1955."
					},
					{
						"publisher": "Advocate Company",
						"pub_info": "Bridgetown: Advocate Company, 1956. (Second printing)"
					},
					{
						"publisher": "Advocate Company",
						"pub_info": "Bridgetown: Advocate Company, 1957. (Second edition)"
					},
					{
						"publisher": "Advocate Company",
						"pub_info": "Bridgetown: Advocate Company, 1965. (Third edition)"
					},
					{
						"publisher": "The Barbados National Trust",
						"pub_info": "[Barbados: The Barbados National Trust, 1969]. (Fourth edition)"
					},
					{
						"publisher": "The Barbados National Trust",
						"pub_info": "[Barbados: The Barbados National Trust, 1970]. (Fifth edition)"
					},
					{
						"publisher": "The Barbados National Trust",
						"pub_info": "[Barbados: The Barbados National Trust, 1992]. (Sixth edition)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Collected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "Barbados, 1959."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Rhymed Ruminations on the Fauna of Barbados",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Selected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "Coles Printery",
						"pub_info": "Bridgetown: Coles Printery, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Man Who Loved Attending Funerals and Other Stories",
				"summary": ["Collymore's stories explore the mind's dark places. Often morbid and grotesque, they deal with the solitary, the eccentric, and the psychotic in society. This is the first collection of Collymore's finely focused and evocative short stories. The book includes an appraisal of Collymore's work by Harold Barratt and Reinhold Sander and will be invaluable for scholars and students of West Indian literature, charting the awakening of writers in the forties and fifties. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Colombo",
		"first_name": "Judith Woolcock",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "The Fablesinger",
				"summary": [""],
				"editions": [
					{
						"publisher": "Crossing Press",
						"pub_info": "Freedom, CA: Crossing Press, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Conde",
		"first_name": "Maryse",
		"birth_city": "",
		"birth_country": "Guadeloupe",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Heremakhonon",
				"summary": [""],
				"editions": [
					{
						"publisher": "Union generale d'editions",
						"pub_info": "Paris: Union generale d'editions, 1976."
					},
					{
						"publisher": "Three Continents Press",
						"pub_info": "Washington D.C: Three Continents Press, 1982."
					},
					{
						"publisher": "Lynne Rienner Publishers",
						"pub_info": "Lynne Rienner Publishers, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "A Season in Rihata",
				"summary": ["In Rihata, a small sleepy backwater town in a fictitious African state, a couple and their family struggle to come to terms with each other against a background of political maneuvring and upheaval. Marie-Helene, far from her native home in Guadeloupe, lives unhappily with her African husband, Zek. Their uneasy existence is further disturbed by the arrival of Zek's brother Madou, now Minister for Rural Development, on an official visit to Rihata. Murky events from the past resurface and send ripples through their lives. This portrait of an African community torn between progress and tradition and subject to the whims of a dictatorship unfolds through a subtle web of personal relationships. A Season in Rihata is a novel of political power, exile, grief, and loneliness."],
				"editions": [
					{
						"publisher": "Robert Laffont",
						"pub_info": "Paris: Robert Laffont, 1981."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Segu",
				"summary": [""],
				"editions": [
					{
						"publisher": "Robert Laffont",
						"pub_info": "Paris: Robert Laffont, 1984."
					},
					{
						"publisher": "Viking",
						"pub_info": "[New York] Viking [1987]."
					},
					{
						"publisher": "Ballantine",
						"pub_info": "New York: Ballantine Books, 1988. (Paperback)"
					},
					{
						"publisher": "Penguin",
						"pub_info": "New York: Penguin USA, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Children of Segu",
				"summary": [""],
				"editions": [
					{
						"publisher": "Robert Laffont",
						"pub_info": "Paris: Robert Laffont, 1985."
					},
					{
						"publisher": "Viking",
						"pub_info": "[New York] Viking [1989]."
					},
					{
						"publisher": "Ballantine",
						"pub_info": "New York: Ballantine Books [1990]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "The Morne of Massabielle (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ubu Repertory Theater Publications",
						"pub_info": "New York: Ubu Repertory Theater Publications, 1991."
					},
					{
						"publisher": "Passeggiata Press",
						"pub_info": "Passeggiata Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "I, Tituba, Black Witch of Salem",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mercure de France",
						"pub_info": "Paris: Mercure de France, 1986."
					},
					{
						"publisher": "University Press of Virginia",
						"pub_info": "Charlottesville: University Press of Virginia [1992]."
					},
					{
						"publisher": "Ballantine",
						"pub_info": "New York: Ballantine Books, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Tree of Life",
				"summary": [""],
				"editions": [
					{
						"publisher": "Seghers",
						"pub_info": "Paris: Seghers, 1987."
					},
					{
						"publisher": "Ballantine",
						"pub_info": "New York: Ballantine Books, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Crossing the Mangrove",
				"summary": [""],
				"editions": [
					{
						"publisher": "ercure de France",
						"pub_info": "Paris: Mercure de France, 1989."
					},
					{
						"publisher": "Anchor Books",
						"pub_info": "New York: Anchor Books, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Last of the African Kings",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mercure de France",
						"pub_info": "Paris: Mercure de France, 1992."
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1997. (Cloth)"
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Conversations With Maryse Conde",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1996. (Cloth)"
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Desirada",
				"summary": [""],
				"editions": [
					{
						"publisher": "Robert Laffont",
						"pub_info": "Paris: Robert Laffont, 1997."
					},
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Windward Heights",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 1998."
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber, 1998. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Land of Many Colors and Nanna Ya",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1999. (Cloth)"
					},
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 1999. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Tales from the Heart: True Stories from My Childhood",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Cooper",
		"first_name": "Afua",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Afua Cooper was born in Westmoreland, and grew up in Kingston Jamaica. In 1980 she migrated to Toronto, Canada."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Breakin Chains (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Weelahs Publications",
						"pub_info": "[Toronto] Weelahs Publications [1983]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "The Red Catepillar on College Street (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sister Vision",
						"pub_info": "Toronto: Sister Vision, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Memories Have Tongue (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sister Vision",
						"pub_info": "Toronto: Sister Vision, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Utterances and Incantations (Editor)",
				"summary": ["A poetry anthology. Contributors are Lillian Allen, amuna baraka-clarke, Michelle Barrow, Louise Bennett, Jean 'Binta' Breeze, Afua Cooper, Queen Majeeda, ahdri zhina mandiela , Cherry Natural, Deanne (Dee) Smith and Anita Stewart a.k.a. Anilia Soyinka."],
				"editions": [
					{
						"publisher": "Sister Vision",
						"pub_info": "Toronto: Sister Vision, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Cousins",
		"first_name": "Phyllis",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Queen of the Mountain",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ginn & Co, and The Ministry of Education of Jamaica",
						"pub_info": "London: Ginn & Co, and The Ministry of Education of Jamaica, 1967."
					}
				]
			}
		]
	},
	{
		"last_name": "Craig",
		"first_name": "Christine",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Emanuel and His Parrot",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London: Oxford University Press, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Emanuel Goes to Market",
				"summary": [""],
				"editions": [
					{
						"publisher": "Oxford University Press",
						"pub_info": "London: Oxford University Press, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Quadrille for Tigers",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mina Press",
						"pub_info": "Berkeley, CA: Mina Press, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Guyana at the Crossroads (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Miami N-S Center Press",
						"pub_info": "Coral Gables: University of Miami N-S Center Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Mint Tea and Other Stories",
				"summary": ["Unconventional love, social injustice, dangerous economics--these are the subject of Christine Craig's short stories. She tenderly evokes the women's experiences of Jamaica, criss-crossing between generations and places, disregarding conventions, and weaving new insights into a complex place and a complex people. Craig brings to this first collection a sharp, unsentimental eye, a flair for language, and a subtle sense of irony. Christine Craig now lives in the U.S. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heinemann, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Dabydeen",
		"first_name": "Cyril",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1945",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Cyril Dabydeen was born in the Canje, Guyana, in 1945. His father was a marginal cattle farmer, his mother a seamstress. He grew up with his grandmother and an extended family of aunt, nieces, nephews. He is a cousin of the writer David Dabydeen. In the early 1970s he left Guyana for Canada to obtain higher education. In his early years in Canada he worked in a variety of casual jobs, most importantly as a tree planter in the Canadian forests of the north, where he worked with Native Canadians. It was this experience which was part of the process of the drawing of imaginative connections between Guyana and Canada, both with large ‘unpeopled’ hinterlands and surviving native peoples."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Poems in Recession",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1972"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Distances (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Fiddlehead",
						"pub_info": "[Vancouver] Fiddlehead Poetry Books, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Goatsong (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mosaic Press/Valley Editions",
						"pub_info": "Ontario: Mosaic Press/Valley Editions, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Heart's Frame (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1977"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "This Planet Earth (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Borealis Press",
						"pub_info": "Ottawa: Borealis Press, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Still Close to the Island (Poems & Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Commoner's Publishing",
						"pub_info": "Ottawa: Commoner's Publishing, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Elephants Make Good Stepladders (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Third Eye",
						"pub_info": "London, Ontario: Third Eye, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Islands Lovelier Than a Vision (Poems)",
				"summary": ["Poems that match a complexity of tone and attitude to the experience of twin Caribbean and Canadian horizons, where even as the poems record a growing immersion in the textures of Canadian life, memories of Guyana surface with stubborn persistence."],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree Press, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Dark Swirl",
				"summary": ["When a European naturalist arrives in a remote rural village, folk belief confronts rationalistic science in this poetic fable which explores the Guyanese legend of the monstrous Massacouraman."],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree Press, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Glass Forehead",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vesta Publications",
						"pub_info": "Vesta Publications, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "A Shapely Fire: Changing the Literary Landscape (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mosaic Press",
						"pub_info": "Ontario: Mosaic Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "To Monkey Jungle (Short stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Third Eye",
						"pub_info": "Ontario: Third Eye, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "The Wizard Swami",
				"summary": ["A richly observed comedy that deals with the fate of Hindu ideals in secular and cosmopolitan Guyana as a rural Hindu teacher finds multi-racial Georgetown a confusing place and discovers the dangers to religion's truths when they serve ethnic assertion."],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Coastland: New and Selected Poems (1973-1987)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mosaic Press",
						"pub_info": "Oakville, Ontario: Mosaic Press, [1989]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Jogging in Havana (Short stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mosaic Press",
						"pub_info": "Ontario: Mosaic Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Sometimes Hard",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Storming the Wind (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Born in Amazonia (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mosaic Press",
						"pub_info": "Oakville, Ontario: Mosaic Press, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Berbice Crossing and Other Stories",
				"summary": ["Short stories spanning the crossing between the Caribbean and North America, set variously in the urban melting pot of Toronto and the unsettling landscapes of rural Berbice with its ferocious crocodiles and even a spliff-toting Rasta."],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Another Way to Dance: Contemporary Asian Poetry from Canada and the United States (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Black Jesus and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1996."
					},
					{
						"publisher": "Inbook",
						"pub_info": "Inbook, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Discussing Columbus (Poems)",
				"summary": ["Dabydeen explores experiences of Canada and the Caribbean which simultaneously speak of a past of brutal genocide and a world of recreating newness, constantly evolving from the heterogeneous convergencies which that voyage of 1492 began."],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "My Brahmin Days and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "North of the Equator",
				"summary": [""],
				"editions": [
					{
						"publisher": "Beach Holme",
						"pub_info": "Vancouver: Beach Holme, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Dabydeen",
		"first_name": "David",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1957",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["David Dabydeen was born on a sugar estate in Berbice, Guyana in 1957. His family lived for a time in New Amsterdam where he attended school. He recalls moving back to his family village, Brighton, during the 1964 race riots. At the age of around ten he won a scholarship to Queen’s College in Georgetown where he studied for a couple of years. He was sent to England at the age of twelve in 1969 and was in care until he was sixteen. He won a scholarship to Cambridge University and read English there and at London Universities, completing his doctorate in 1982. He was a post-doctoral fellow at Oxford University for three years. He is currently Professor at the Centre for Caribbean Studies, University of Warwick and was for some years a roving ambassador for Guyana."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Slave Song (Poems)",
				"summary": ["Winner of the Commonwealth Poetry Prize. In these poems Dabydeen explores the connections between slavery and indenture, the desire-hate relationship between Black and White and the violence and vitality of Creole."],
				"editions": [
					{
						"publisher": "Dangaroo Press",
						"pub_info": "Coventry: Dangaroo Press, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Black Presence in English Literature (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Manchester University Press",
						"pub_info": "Manchester University Press, 1985"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Hogarth's Blacks: Images of Blacks in Eighteenth Century English Art",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dangaroo Press",
						"pub_info": "Coventry: Dangaroo Press, 1987. (Paperback)"
					},
					{
						"publisher": "University of Georgia Press",
						"pub_info": "Athens, GA: University of Georgia Press, 1987. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Hogarth, Walpole and Commercial Britain",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "Hansib, 1987. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "India in the Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "Hansib, 1987. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Coolie Odyssey (Poems)",
				"summary": ["A celebration, albeit a tentative and unsentimental one, of the survival and rooting of a creolised Indian culture in the Caribbean, and Dabydeen’s own exploration of his cultural origins."],
				"editions": [
					{
						"publisher": "Dangaroo Press",
						"pub_info": "Coventry, Dangaroo Press, 1988. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Handbook for Teaching Caribbean Literature (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Heinemann, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "A Reader's Guide to West Indian and Black British Literature",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hansib",
						"pub_info": "Hansib, 1988"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "The Intended",
				"summary": ["A novel drawing both on memories of a Guyanese childhood and of fending for himself in immigrant London before going to Cambridge."],
				"editions": [
					{
						"publisher": "Secker & Warberg",
						"pub_info": "London: Secker & Warberg, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Black Writers in Britain, 1760-1890 (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Edinburgh University Press",
						"pub_info": "Edinburgh University Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Disappearance",
				"summary": ["A novel about a Guyanese engineer working on a cliff reclamation project in rural Kent. It is full of intertextual play with Conrad, Wilson Harris and V.S. Naipaul, and investigates the buried centre of Empire deep in England and the ironies of the difficult but hopeful multicultural transformation of British society."],
				"editions": [
					{
						"publisher": "Secker & Warberg",
						"pub_info": "London: Secker & Warberg, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Turner: New and Selected Poems",
				"summary": ["A long narrative poem written in response to JMW Turner’s celebrated painting ‘Slavers Throwing Overboard the Dead & Dying’ which focuses on what is hidden in Turner’s painting, the submerged head of the drowning African."],
				"editions": [
					{
						"publisher": "Jonathan Cape",
						"pub_info": "London: Jonathan Cape, 1994. (Trade paperback)"
					},
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Counting House",
				"summary": ["An historical novel set in India and British Guiana in the earliest days of indenture. Deals with the meeting of African and Indian within the corrupting commerce of the sugar plantation."],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Across the Dark Waters: Indian Identity in the Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "MacMillan",
						"pub_info": "MacMillan, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "A Harlot's Progress",
				"summary": ["Dabydeen echoes the method of ‘Turner’ by taking the black slave boy from Hogarth’s ‘A Harlot’s Progress’ and inventing a biography for him. As the oldest black man in London, forced on the charity of the abolitionists, Mungo spins a story which in its twists and turns is the one he wants to tell, not the story of victimisation and paternalistic rescue which his ‘benefactors’ want to hear."],
				"editions": [
					{
						"publisher": "Jonathan Cape",
						"pub_info": "London: Jonathan Cape, 1999. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "D'Aguiar",
		"first_name": "Fred",
		"birth_city": "",
		"birth_country": "Guyana/England/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1960",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Fred D'Aguiar was born in London in 1960 to Guyanese parents. In 1962 he was taken to Guyana where he lived with his grandmother until 1972 when he returned, at the age of twelve, to England. D'Aguiar trained as a psychiatric nurse before reading African and Caribbean Studies at the University of Kent, Canterbury, graduating in 1985. After winning two writers-in-residency positions, at Birmingham University and the University of Cambridge he began to focus all of his energies on creative writing. In 1994, D'Aguiar moved to the United States to take up a Visiting Writer position at Amherst College, Amherst, Massachusetts (1992–94). Since then, he has taught at Bates College, Lewiston, Maine (Assistant Professor, 1994–95) and the University of Miami where he held the position of Professor of English and Creative Writing. In 2003 he took up the position of Professor of English and Co-Director of the Master of Fine Arts in Creative Writing at Virginia Tech."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Mama Dot",
				"summary": ["This collection of poems set in Guyana centers on an 'archetypal' grandmother figure, Mama Dot, and was notable for its fusion of standard English and Nation language."],
				"editions": [
					{
						"publisher": "Chatto & Windus / The Hogarth Press",
						"pub_info": "London: Chatto & Windus / The Hogarth Press [1985]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "High Life",
				"summary": ["A play irst produced at the Albany Empire in London in 1987."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[As far as we know, this play has not been published.]"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Explainer",
				"summary": ["A fifteen-page pamphlet containing twelve poems. Published while the author was a post-graduate student at the University of Warick."],
				"editions": [
					{
						"publisher": "Race Today Publications",
						"pub_info": "[London] Race Today Publications [1988]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Airy Hall",
				"summary": ["This collection of poems set in Guyana is named after the village in Guyana where D'Aguiar spent his childhood. "],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1989]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "A Jamaican Airman Foresees His Death",
				"summary": ["Performed at the Royal Court Theatre, London, in 1991, this play takes Yeats's famous poem and twists it into a rhapsody from a colonial perspective in WW2 Scotland. 'A tough, warm and thrillingly individual play full of live-wire humour and athletic assurance. The writing is reckless but controlled, the humour dark, ribald and dangerous. Simply bursts with that fiery energy of which true theatre is made'. -John Peter, Sunday Times"],
				"editions": [
					{
						"publisher": "Methuen",
						"pub_info": "London: Methuen, 1995"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "British Subjects",
				"summary": ["his collection of poems explores the experiences of peoples of the West Indian diaspora in London."],
				"editions": [
					{
						"publisher": "Bloodaxe Books",
						"pub_info": "[Newcaslte] Bloodaxe Books [1993]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Longest Memory",
				"summary": ["The author's first novel. Winner of two of England's most distinguished literary prizes: the Whitbread and the David Higham First Novel Awards. It tells the story of Whitechapel, a slave on an eighteenth-century Virginia plantation."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1994]."
					},
					{
						"publisher": "Pantheon",
						"pub_info": "New York: Pantheon, 1994."
					},
					{
						"publisher": "Vintage",
						"pub_info": "London: Vintage, 1995."
					},
					{
						"publisher": "Avon",
						"pub_info": "New York: Avon, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Dear Future",
				"summary": ["The author's second novel explores the history of the West Indian diaspora through a fictional account of the lives of one extended family. A personal favorite."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1996]."
					},
					{
						"publisher": "Pantheon",
						"pub_info": "New York: Pantheon, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Feeding the Ghosts",
				"summary": ["The author's third novel was inspired by a visit D'Aguiar made to the Merseyside Maritime Museum in Liverpool and is based on the true story of the Zong massacre in which 132 slaves were thrown from a slave ship into the Atlantic for insurance purposes. According to historical accounts, one slave survived and climbed back onto the ship; and in D'Aguiar's narrative this slave - about whom there is next to no historical information - is developed as the fictional character Mintah."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1997]."
					},
					{
						"publisher": "Ecco Press",
						"pub_info": "[Hopewell, New Jersey] Ecco Press [1999]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Bill of Rights",
				"summary": ["A long narrative poem about the Jonestown massacre in Guyana in 1979, which is told in Guyanese versions of English, fusing patois, Creole and nation language with the standard vernacular.[8] It was shortlisted for the 1998 T. S. Eliot Prize."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [1998]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Bloodlines (A novel-in-verse)",
				"summary": ["Tells the story of a black slave and her white lover."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [2000]."
					},
					{
						"publisher": "Overlook Press",
						"pub_info": "New York: Overlook Press, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "An English Sampler: New and Selected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [2001]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "Bethany Bettany",
				"summary": ["The author's fourth novel centers on a five-year-old Guyanese girl, Bethany, whose suffering has been read by some as symbolising that of a nation (Guyana) seeking to make itself whole again."],
				"editions": [
					{
						"publisher": "Chatto & Windus",
						"pub_info": "London: Chatto & Windus [2003]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2009",
				"title": "Continental Shelf",
				"summary": ["This poetry collection centers on a response to the Virginia Tech Massacre in which 32 people were killed by a student in 2007. It was a finalist for the 2009 T. S. Eliot Prize."],
				"editions": [
					{
						"publisher": "Carcanet",
						"pub_info": "Manchester: Carcanet;, 2009."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2013",
				"title": "Rose of Toulouse",
				"summary": ["This poetry collection centers on a response to the Virginia Tech Massacre in which 32 people were killed by a student in 2007. It was a finalist for the 2009 T. S. Eliot Prize."],
				"editions": [
					{
						"publisher": "Carcanet",
						"pub_info": "Manchester: Carcanet;, 2013."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2014",
				"title": "Children of Paradise",
				"summary": ["The author returns to the territory of Jim Jones's utopian commune, interweaving magical realism and shocking history into a resonant story of love, faith, oppression, and sacrifice in which a mother and daughter attempt to break free with the help of an extraordinary gorilla."],
				"editions": [
					{
						"publisher": "Granta",
						"pub_info": "London: Granta, 2014."
					},
					{
						"publisher": "Harper",
						"pub_info": "New York: Harper, 2014."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2015",
				"title": "Mr Reasonable",
				"summary": ["A radio play about a freed black slave, a skilled silk weaver, who is engaged by Shakespeare to make theatreical costumes. Broadcast on BBC Radio 4 on 10 April 2015."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[As far as we know, this radio play has not been published.]"
					}
				]
			}
		]
	},
	{
		"last_name": "Danticat",
		"first_name": "Edwidge",
		"birth_city": "",
		"birth_country": "Haiti/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1969",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["At 12, Edwidge Danticat spoke almost no English. At 26, she has been nominated for one of the most prestigious awards in literature. Her collection of short stories, Krik? Krak!, explores the island of her birth, Haiti, blending its poetry and its tremendous pain. Reached at her Brooklyn home where she lives with her parents, Danticat says she draws on the stories she heard as a little girl. 'We take great pride in our past,' says Danticat in her gently accented English. Her first languages were Creole and French. When she was a toddler, her parents left Haiti to find a better life in the U.S. She stayed with an aunt and uncle until she rejoined them at 12. While her stories are set in contemporary Haiti, Danticat brings in historical characters like the 1790s slave leader Boukman and events like the killings in 1937 at Massacre River (when soldiers in the Dominican Republic slaughtered Haitians). Although she is a U.S. citizen, Danticat remains connected to Haiti, which she has visited recently. Krik? Krak! is being translated into Creole for Haitian radio. Danticat also served as the associate producer of a documentary made by Jonathan Demme about Haitian torture survivors, Courage and Pain. Danticat always wanted to write, but she planned to train as a nurse after she graduated from Barnard College with a degree in French literature. Like many children of emigrants, Danticat felt great pressure to become 'a doctor, a lawyer, an engineer.' Only because she had a scholarship did she attend Brown University to earn an MFA in creative writing instead of attending nursing school. Her much-praised first novel, Breath, Eyes, Memory, was published in 1994. (From USA TODAY - May 1997)"],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Breath, Eyes, Memory",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 1994."
					},
					{
						"publisher": "Abacus",
						"pub_info": "London: Abacus, 1994."
					},
					{
						"publisher": "Vintage Books",
						"pub_info": "New York: Vintage Books, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Krik? Krak!",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 1995."
					},
					{
						"publisher": "Vintage/Random House",
						"pub_info": "NewYork: Vintage/Random House, 1996. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "The Farming of Bones",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Beacon Best of 2000: Great Writing by Women and Men of All Colors and Cultures (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Beacon Press",
						"pub_info": "Boston: Beacon Press, 2000. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "The Butterfly's Way: Voices from the Haitian Dyaspora in the United States (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Soho",
						"pub_info": "New York: Soho, 2001. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "After the Dance: A Walk through Carnival in Jacmel, Haiti",
				"summary": [""],
				"editions": [
					{
						"publisher": "Crown",
						"pub_info": "New York: Crown Publishers 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Behind the Mountains: The Diary of Celiane Esperance",
				"summary": [""],
				"editions": [
					{
						"publisher": "Orchard Books",
						"pub_info": "New York: Orchard Books, 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2004",
				"title": "The Dew Breaker",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 2004."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2005",
				"title": "Anacaona: Golden Flower, Haiti, 1490",
				"summary": ["A young adult novel. Part of 'The Royal Diaries' series"],
				"editions": [
					{
						"publisher": "Scholastic",
						"pub_info": "Scholastic, 2005."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2010",
				"title": "Create Dangerously: The Immigrant Artist at Work",
				"summary": [""],
				"editions": [
					{
						"publisher": "Princeton University Press",
						"pub_info": "Princeton University Press, 2010."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2013",
				"title": "Claire of the Sea Light",
				"summary": ["The title character of this novel is a 7-year-old girl who goes missing in the first chapter and stays missing until the very last pages, as a portrait of the village of Ville Rose's sometimes beautiful, sometimes brutal reality is painted, and a collision of fates inches closer."],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 2013."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2015",
				"title": "Mama's Nightingale",
				"summary": ["An illustrated childrens' book. A touching tale of parent-child separation and immigration."],
				"editions": [
					{
						"publisher": "dialect Books",
						"pub_info": "New York: Dial Books, 2015."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2015",
				"title": "Untwine",
				"summary": ["A young adult novel. A haunting and mesmerizing story about sisterhood, family, love, and loss."],
				"editions": [
					{
						"publisher": "Scholastic Press",
						"pub_info": "Scholastic Press, 2015."
					}
				]
			}
		]
	},
	{
		"last_name": "Das",
		"first_name": "Mahadai",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1954",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Mahadai Das was born in Eccles, East Bank Demerara, Guyana in 1954. She wrote poetry from her early school days at Bishops High School, Georgetown. She did her first degree at the University of Guyana and received her MA at Columbia University, New York, and then began a doctoral program in Philosophy at the University of Chicago. Das became ill and never completed the programme. She was a dancer, actress, teacher, and beauty-queen, served as a volunteer member of the Guyana National Service in c1976 and was part of the Messenger Group promoting ‘Coolie’ art forms at a time when Indo-Guyanese culture was virtually excluded from national life. Mahadai Das has, tragically, suffered from debilitating health problems that appear to have curtailed the writing career of one of the Caribbean’s most talented women poets."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "I Want to be a Poetess of my People",
				"summary": ["Traces the roots of the Guyanese people from indentureship to independence. The collection calls for a new sense of nationalism independent of colonial powers, though it also bears the marks of being beholden to the sloganizing politics of the PNC."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "My Finer Steel Will Grow ",
				"summary": ["Expresses a growing disillusionment with Guyana under the PNC and its corruption, authoritarianism and anti-Indianism."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Bones",
				"summary": ["Writing from feminist and lndo-Caribbean perspectives, Mahadai Das’s poetry reveals a daring metaphorical imagination in exploring love, love denied, illness as a literal and metaphoric dimension of life and the experience of urban America."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Dathorne",
		"first_name": "Oscar Ronald",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Dumplings in the Soup",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cassell",
						"pub_info": "London: Cassell, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "The Scholar-man",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cassell",
						"pub_info": "London: Cassell, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "One Iota of Difference",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cassell",
						"pub_info": "London: Cassell, ????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Caribbean Narrative: An anthology of West Indian Writing (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann Educational Books",
						"pub_info": "London: Heinemann Educational Books, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Africa in Prose (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Penguin",
						"pub_info": "Baltimore: Penguin, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "The Black Mind: A History of African Literature",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Minnesota Press",
						"pub_info": "Minneapolis: University of Minnesota Press, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "African Literature in the Twentieth Century",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Minnesota Press",
						"pub_info": "Minneapolis: University of Minnesota Press, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Dark Ancestor: The Literature of the Black Man in the Caribbean",
				"summary": [""],
				"editions": [
					{
						"publisher": "Louisiana State University",
						"pub_info": "Baton Rouge: Louisiana State University, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "In Europe's Image: The Need for American Multiculturalism",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bergin and Garvey",
						"pub_info": "Westport, CT / London: Bergin and Garvey [1994]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Imagining the World: Mythical Belief versus Reality in Global Encounters",
				"summary": [""],
				"editions": [
					{
						"publisher": "Bergin and Garvey",
						"pub_info": "Westport, CT / London: Bergin and Garvey [1994]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Asian Voyages",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenwood Publishing Group",
						"pub_info": "Westport, CT: Greenwood Publishing Group, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Worlds Apart: Race in the Modern Period",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenwood Publishing Group",
						"pub_info": "Westport, CT: Greenwood Publishing Group, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Dawes",
		"first_name": "Kwame",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1962",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Kwame Senu Neville Dawes, son of the writer Neville Dawes, was born in Ghana in 1962 and grew up in Jamaica where he attended Jamaica College and the University of the West Indies at Mona. He studied and taught in New Brunswick on a Commonwealth Scholarship to Canada. Since 1992 he has been teaching at the University of South Carolina. He is an Associate Professor in English on the Columbia campus of that institution."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Progeny of Air",
				"summary": ["Progeny of Air is Kwame Dawes' first publication and won the Forward Poetry Prize for first book in 1994. In making his own return of memory from Canada and South Carolina to a childhood and youth in 1970's Jamaica, Dawes' poems display a gift of characterization, and an acute sense of time and place."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Resisting the Anomie",
				"summary": ["Resisting the Anomie is Kwame Dawes' 2nd collection of poetry. Dawes celebrates his roots and holds them fast. Dawes writes poems of love, faith, anger and humor that offer glimpses into his many homes."],
				"editions": [
					{
						"publisher": "Goose Lane Editions",
						"pub_info": "Fredericton: Goose Lane Editions, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Prophets",
				"summary": ["The author's 3rd poetry collection. Drawing on inspiration as diverse as Derek Walcott, the Bible and Peter Tosh, Kwame Dawes brings alive a world where 24-hour satellite television belching out the swaggering voices of American hellfire preachers, competes with dancehall, 'slackness' and ganja for Jamaican minds."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Jacko Jacobus",
				"summary": ["The author's 4th poetry collection and his second book-length poem. Here Dawes reworks the myth of Jacob and Esau building on a griping narrative of prophecy, love, deceit and murder to address contemporary Caribbean realities."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Requiem",
				"summary": ["Requiem is Kwame Dawes' 5th publication. Inspired by the award-winning book The Middle Passage: White Ships/Black Cargo by the American artist Tom Feelings, these poems draw us back into the pain, cauterize the lingering infection of slavery and offer the oil of healing."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Shook Foil - A Collection of Reggae Poems",
				"summary": ["The author's 6th collection of poems dramatizes the conflict between the purity of essences and the tints of the actual, not least in the poems which focus on Bob Marley's life.  The poetry rises to new lyric heights in these psalms of confession and celebrations of reggae's power to prophesy, to seek after righteousness and seduce the body and mind."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Wheel and Come Again - An Anthology of Reggae Poetry (Editor)",
				"summary": ["The author's 7th publication. This collection is a dancehall session in poetry that takes readers into the heart of reggae and into the seduction of the drum and bass. It features poems from almost 40 writers of Caribbean origin including Kamau Brathwaite, Lorna Goodison, Linton Kwesi Johnson, Edward Baugh and John Agard."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1998."
					},
					{
						"publisher": "Goose Lane Editions",
						"pub_info": "Fredericton: Goose Lane Editions, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Natural Mysticism: Towards a New Reggae Aesthetic",
				"summary": ["Natural Mysticism: Towards a New Reggae Aesthetic is Kwame Dawes' 8th publication. It speaks for all those for whom reggae defines the major experiences of life. Here Dawes describes how reggae has been central to his sense of selfhood, his consciousness of place and society in Jamaica and his development as a writer."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Talk Yuh Talk",
				"summary": ["Talk Yuh Talk - Interviews with Anglophone Caribbean Poets is Kwame Dawes' 9th publication. This is the first collection of in depth interviews with Caribbean Poets to be published and contains some of the most insightful revelations about the craft, ideology and history of twenty contemporary Caribbean poets."],
				"editions": [
					{
						"publisher": "University Press of Virginia",
						"pub_info": "Charlottesville: University Press of Virginia, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Map-Maker",
				"summary": ["Map-Maker is Kwame Dawes' 10th publication and was a winner in the Poetry Business Book and Pamphlet competition in 1999. Map-Maker is a compact chapbook of four of Dawes' most striking and complex long poems that traverse landscapes from Ghana, through the Caribbean to South Carolina."],
				"editions": [
					{
						"publisher": "Smith/Doorstop Books",
						"pub_info": "Westgate: Smith/Doorstop Books, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Midland",
				"summary": ["Midland is Kwame Dawes' 7th collection of poetry and the first to be published in the United States. It is a powerful testament of the complexity, pain, and enrichment of inheritance. It is a compelling meditation on what is given and taken away in the acts of generation and influence."],
				"editions": [
					{
						"publisher": "Ohio University Press",
						"pub_info": "Athens, OH: Ohio University Press, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "One Love",
				"summary": ["One Love was inspired by Roger Mais' classic novel Brotherman and is Dawes' first published play. This powerful parable of desire and denial premiered at Bristol Old Vic in April 2001. It was commissioned by Talawa, Britian's leading black theatre company."],
				"editions": [
					{
						"publisher": "Methuen",
						"pub_info": "London: Methuen, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "A Place To Hide and Other Stories",
				"summary": ["A Place To Hide and Other Stories is Kwame Dawes' first book of fiction. In this book of short stories, he tells fascinating tales of human relationships and the political and social underpinnings of Jamaican life."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "New and Selected Poems 1994-2002",
				"summary": ["The author's 14th publication contains a generous selection from his earlier collections of poetry, as well as new poems that in their frank meditations on family and individual trauma comment revealingly on the themes and concerns of his earlier collections."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "Bob Marley: Lyrical Genius",

				"summary": ["A captivating analysis of the poetry, intelligence and spiritual aspects of Bob Marley's lyrics. It guides the reader through all of Bob Marley's songs that appeared on the Island label ending with Confrontation, contextualizing the Island material within the larger body of Marley's work."],
				"editions": [
					{
						"publisher": "Sanctuary Press",
						"pub_info": "London: Sanctuary Press, 2003."
					}
				]
			}
		]
	},
	{
		"last_name": "Dawes",
		"first_name": "Neville",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "The Last Enchantment",
				"summary": [""],
				"editions": [
					{
						"publisher": "MacGibbon and Kee",
						"pub_info": "London: MacGibbon and Kee, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Interim",
				"summary": [""],
				"editions": [
					{
						"publisher": "Institute of Jamaica",
						"pub_info": "Kingston: Institute of Jamaica, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "D'Costa",
		"first_name": "Jean",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1937",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Sprat Morrison",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins-Sangster",
						"pub_info": "Kingston: Collins-Sangster, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Escape to Last Man Peak",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman Caribbean",
						"pub_info": "Port of Spain: Longman Caribbean, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Voices in the Wind",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Roger Mais: The Hills Were Joyful Together and Brother Man. Critical Studies of Caribbean Writers",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Our Way: A Collection of Caribbean Short Stories for Youngsters (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Voices in Exile: Jamaican Texts of the 18th and 19th Centuries (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Alamaba Press",
						"pub_info": "Tuscaloosa: University of Alamaba Press, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Language in Exile: Three Hundred Years of Jamaican Creole (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Alamaba Press",
						"pub_info": "Tuscaloosa: University of Alamaba Press, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "De Boissiere",
		"first_name": "Ralph",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago, Australia",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Crown Jewel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Australasian Book Society",
						"pub_info": "Melbourne: Australasian Book Society, 1952."
					},
					{
						"publisher": "Australasian Book Society",
						"pub_info": "Melbourne: Australasian Book Society, 1952. (Paperback)"
					},
					{
						"publisher": "Allison & Busby",
						"pub_info": "London: Allison & Busby, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "Rum and Coca Cola",
				"summary": [""],
				"editions": [
					{
						"publisher": "Australasian Book Society",
						"pub_info": "Melbourne: Australasian Book Society, 1956."
					},
					{
						"publisher": "Australasian Book Society",
						"pub_info": "Melbourne: Australasian Book Society, 1956. (Paperback)"
					},
					{
						"publisher": "Allison & Busby",
						"pub_info": "London: Allison & Busby, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "No Saddles for Kangaroos",
				"summary": [""],
				"editions": [
					{
						"publisher": "Australasian Book Society",
						"pub_info": "Sydney: Australasian Book Society, 1964."
					}
				]
			}
		]
	},
	{
		"last_name": "DeHaarte",
		"first_name": "Norma",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Guyana Betrayal",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sister Vision Press",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "De Lima",
		"first_name": "Arthur",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Community: Where Lessons Are Learned From Animals",
				"summary": [""],
				"editions": [
					{
						"publisher": "Imprint Caribbean",
						"pub_info": "Trinidad: Imprint Caribbean Ltd. 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Echoes of Oritumbe",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "The De Limas Of Frederick Street",
				"summary": [""],
				"editions": [
					{
						"publisher": "Imprint Caribbean",
						"pub_info": "Trinidad: Imprint Caribbean Ltd. 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "The House of Jacob",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "The Great Quake",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Who Killed Amandela Delpina",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "New York: Vantage, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "De Lima",
		"first_name": "Clara Rosa",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1921",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Tomorrow Will Always Come",
				"summary": [""],
				"editions": [
					{
						"publisher": "Obolensky",
						"pub_info": "New York: Obolensky, 1965."
					},
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Thoughts and Dreams (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Dreams Non Stop (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Reminiscing (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Not Bad, Just a Little Mad",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Ilfracombe: Stockwell, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Countdown to Carnival",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1978. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Currents of the Yuna",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Kilometre Nineteen",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Devon: Stockwell, 1980."
					}
				]
			}
		]
	},
	{
		"last_name": "De Lisser",
		"first_name": "Herbert G.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["De Lisser is not a major West Indian artist, but as an illustrator, in the novel form, of the facts and issues in West Indian slave society, he is unequaled. [Kenneth Ramchand in The West Indian Novel and its Background]."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1913",
				"title": "Jane: A Story of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Gleaner Co.",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1913."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1914",
				"title": "Jane's Career: A Story of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "Methuen",
						"pub_info": "London: Methuen, 1914. (The first British reprint of a West Indian novel.)"
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1915",
				"title": "Susan Proudleigh",
				"summary": [""],
				"editions": [
					{
						"publisher": "Methuen",
						"pub_info": "London: Methuen, 1915."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1917",
				"title": "Triumphant Squalitone: A tropical extravaganza",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Gleaner Co.",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1917."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1919",
				"title": "Revenge: A Tale of Old Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Gleaner Co.",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1919."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1929",
				"title": "The White Witch of Rosehall",
				"summary": ["A story of plantation life and Obeah in Jamaica in the 1830's. (The author's best-known novel, this title has been reprinted in hard and softcover editions numerous times.)"],
				"editions": [
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn Limited, 1929."
					},
					{
						"publisher": "Macmillan Caribbean",
						"pub_info": "Jamaica: Macmillan Caribbean, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1937",
				"title": "Under the Sun: A Jamaican Comedy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn, 1937."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Psyche",
				"summary": ["The story of a slave who becomes first the mistress and later the wife of one of Jamaica's leading planters."],
				"editions": [
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn Limited [1952]."
					},
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn, 1961. (Paperback)"
					},
					{
						"publisher": "Macmillan Caribbean",
						"pub_info": "Jamaica: Macmillan Caribbean, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Morgan's Daughter",
				"summary": ["The story of the mulatto descendant of the famous buccaneer who was rigidly excluded from the Jamaican society of the 1780's."],
				"editions": [
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn Limited [1953]."
					},
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn, 1961. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "The Cup and the Lip",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ernest Benn",
						"pub_info": "London: Ernest Benn, 1956."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Arawak Girl",
				"summary": [""],
				"editions": [
					{
						"publisher": "Pioneer Press",
						"pub_info": "Kingston: Pioneer Press, 1958."
					}
				]
			}
		]
	},
	{
		"last_name": "Donaldsom",
		"first_name": "Robert N.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Hearts Triumph",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: Privately printed, 1944."
					},
					{
						"publisher": "",
						"pub_info": "Rahaman Printery Ltd., 1963. (Revised edition)"
					}
				]
			}
		]
	},
	{
		"last_name": "Donnell",
		"first_name": "Alison",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Routledge Reader in Caribbean Literature (1900-1990's) (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Routledge",
						"pub_info": "London/New York: Routledge, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Companion to Contemporary Black British Culture (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Routledge",
						"pub_info": "New York: Routledge, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Doodnath",
		"first_name": "Samuel",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "From India to Trinidad & Tobago: Asha Kidnapped",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "San Fernando: Self-published, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Santiago and Kumar: First Love Fulfilled",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Siparia: Self-published, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Douglas",
		"first_name": "Marcia",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1961",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Marcia Douglas was born in the UK of Jamaican parents in 1961, but grew up in rural Jamaica. She left Jamaica in 1990 to study for a Master of Fine Arts in Creative Writing at Ohio State University and was awarded a PhD in African American and Caribbean Literature in 1997. Her first publications appeared in Sister of Caliban: A Multilingual Anthology of Contemporary Caribbean Women Poets (1996) and in Callaloo, Sun Dog: Southeast Review, Phoebe and APTE. She currently lives in Boulder, Colorado with her daughter, Avani."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Electricity Comes to Cocoa Bottom (Poems)",
				"summary": ["These poems take the reader on a journey of light, from the flicker of the firefly in rural Jamaica, through the half-moonlight of the limbo of exile in the USA, to the point of arrival and reconnection imaged by the eight-pointed star."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Madam Fate",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Women's Press",
						"pub_info": "London: The Women's Press, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "D'Oyley",
		"first_name": "Enid F.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Between Sea and Sky",
				"summary": ["The story of two Jamaican girls who live in Toronto spend a vacation with their parents in Jamaica where they discover the frustrations and joys of a forgotten environment."],
				"editions": [
					{
						"publisher": "William-Wallace",
						"pub_info": "Toronto: William-Wallace, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Animal Fables and Other Tales Retold",
				"summary": ["The stories in this collection form part of the rich body of oral tradition which survived in the New World. Although many of these tales are from Brazil, some have variants in islands of the Caribbean and in the southern part of the United States of America."],
				"editions": [
					{
						"publisher": "William-Wallace",
						"pub_info": "Toronto: William-Wallace, 1982."
					}
				]
			}
		]
	},
	{
		"last_name": "Drayton",
		"first_name": "Geoffrey",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "Three Meridians (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Ryerson Press",
						"pub_info": "Toronto, Ryerson Press, 1950."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Christopher",
				"summary": ["An imaginative small boy leaves his childhood behind in the course of a school holiday. People puzzle Christopher. His father, an unsuccessful planter in Jamaica, resents his own dependence on his wife's family and includes Christopher in that resentment. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1959."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Zohara",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker and Warburg",
						"pub_info": "London: Secker and Warburg, 1961."
					}
				]
			}
		]
	},
	{
		"last_name": "Du Quesnay",
		"first_name": "Frederick J. Le Mercier",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "A Princess for Port Royal: A romantic novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Ilfracombe: Stockwell, 1960."
					}
				]
			}
		]
	},
	{
		"last_name": "Durie",
		"first_name": "Alice",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1939",
				"title": "One Jamaica Gal",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Jamaica Times Printery",
						"pub_info": "Kingston: The Jamaica Times Printery, 1939."
					}
				]
			}
		]
	},
	{
		"last_name": "Dyer",
		"first_name": "Bernadette",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Villa Fair (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Beach Holme",
						"pub_info": "Vancouver: Beach Holme, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Edgell",
		"first_name": "Zee",
		"birth_city": "",
		"birth_country": "Belize",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Beka Lamb",
				"summary": ["Set in Belize, Beka Lamb is the record of a few months in the life of Beka and her family. The politics of the small colony, the influence of the matriarchal society and the dominating presence of the Catholic Church are woven into the fabric of the story to provide a compelling portrait of ordinary life in Belize. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heinemann, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "In Times Like These",
				"summary": ["The compelling story of a woman's fight to come to terms with the ghosts of her past and to determine her own future. Pavana Leslie returns to her homeland, Belize, after many years abroad, bringing her twin children -- whose unwitting father is now influential in the government. Private emotion twists with public crisis: Pavana strives to reconcile her personal and professional life, while the country itself is in turmoil as Independence approaches and rival factions battle for supremacy. Just as Belize will shake off colonial dependency, so, by the end of this enthralling saga, will Pavana achieve a new confidence, a new vision."],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "Oxford: Heinemann, 1991. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Elliot",
		"first_name": "Lorris",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Coming for to Carry",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Self-published. Toronto, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "The Bibliography of Literary Writings By Blacks in Canada",
				"summary": [""],
				"editions": [
					{
						"publisher": "Williams-Wallace",
						"pub_info": "Toronto: Williams-Wallace, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Ellis",
		"first_name": "Zoila",
		"birth_city": "",
		"birth_country": "Belize",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "On Heroes, Lizards and Passions",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cubola Productions",
						"pub_info": "Belize: Cubola Productions, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Emtage",
		"first_name": "James B.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Brown Sugar: A Vestigial Tale",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1966."
					}
				]
			}
		]
	},
	{
		"last_name": "Escoffery",
		"first_name": "Gloria",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1923",
		"death_day": "",
		"death_month": "",
		"death_year": "2002",
		"bio": ["Gloria Escoffery was born in 1923 in Gayle, St Mary, Jamaica. Her father was a government medical officer and her mother was a professional violinist and Bridge champion. The family (who are white Jamaicans) can trace their arrival in Jamaica in the late 18th century, probably from Haiti after the revolution of 1790. She was educated at St Hilda’s School and was Jamaica Scholar in 1942. She studied at McGill University (Montreal), Slade School of Fine Art (London) and at the University of West Indies School of Education. She started out work as a journalist on the Public Opinion newspaper, taught art in Kingston and then taught English for many years at Brown’s Town Community College until her retirement in 1985. She is one of Jamaica’s most outstanding painters, her work first coming to notice in the 1940s. Her paintings of rural Jamaican life are particularly well known, with strong sympathies for grass-roots people, though there is nothing sentimental in her work, which has strong surreal, non-figurative elements. She is also an important art critic, with scores of articles in Jamaica Journal over the years. She was awarded the Order of Distinction in 1977 and the Silver Musgrave medal in 1989 for her services in the field of art. She died in 2002."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Landscape in the Making (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1976"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Loggerhead (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sandberry Press",
						"pub_info": "Sandberry Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Mother Jackson Murders the Moon (Poems)",
				"summary": ["Whether in her celebrations of domestic happiness in a house where even the chairs talk, her satires on Jamaican life, or her reflections on ageing, Gloria Escoffery writes with a visionary intensity and fantastical imagination which is all her own."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1998."
					}
				]
			}
		]
	},
	{
		"last_name": "Esteves",
		"first_name": "Carmen C.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Green Cane and Juicy Flotsam: Short Stories by Caribbean Women (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Rutgers University Press",
						"pub_info": "New Jersey: Rutgers University Press, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Fergus",
		"first_name": "Howard A.",
		"birth_city": "",
		"birth_country": "Montserrat",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Sir Howard A. Fergus was born at Long Ground in Montserrat. He attended Bethel Primary, Montserrat Grammar School, Erdiston Teacher’s College in Barbados, the University College of the West Indies (1961-64) and the Universities of Bristol (Cert Ed. 1968) and Manchester (M.Ed, 1978) and UWI (Ph. D, 1978). He has served Montserrat since 1955 as a teacher, voucher clerk, Chief Education Officer (1970-73), Acting Permanent Secretary, and from 1975, Speaker of the Montserrat Legislative Council and De Facto Deputy Governor from 1976. Since 1974 his main job has been that of Extra-Mural Resident Tutor of UWI, Montserrat, where he ran a Creative Writing Workshop. He was awarded an CBE in 1995 and knighted in 2001 for his outstanding sevices to Montserrat. He has remained ion the island since the devastating eruption of Soufriere in 1997, which reduced the island’s habitable space by two-thirds, caused the collapse of the economy and forced the migration of almost half of the population."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Dreams of Alliouagana: An Anthology of Montserrat Prose and Poetry (Editor)",
				"summary": ["Works from some 20 writers. With a glossary and 'notes on the selections.'"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "University Centre, Montserrat, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "History Of Alliougana: A Short History of Montserrat",
				"summary": [""],
				"editions": [
					{
						"publisher": "Montserrat Printery Ltd.",
						"pub_info": "Plymouth, Montserrat: Montserrat Printery Ltd., 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Cotton Rhymes (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1976"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "The Seagull and Other Stories (Co-Editor)",
				"summary": ["A collection of short stories. Contributors are: Bernard C.Graham, J.A.George Irish, Dem Pollock, Howard A.Fergus, Eilish Arthurton,and V.Jane Grell."],
				"editions": [
					{
						"publisher": "Alliouagana Commune",
						"pub_info": "Plymouth,Montserrat: Alliouagana Commune, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Montserrat the Last English Colony? Prospects for Independence",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1978"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Green Innocence (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1978"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Stop the Carnival (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1980"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "William H. Bramble: His Life and Times",
				"summary": ["Bramble was important leader in West Indes. A Trade Union Leader and First Chief Minister of Montserrat."],
				"editions": [
					{
						"publisher": "University of the West Indies",
						"pub_info": "University of the West Indies, 1983"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Hugo Versus Montserrat (with E. A. Markham)",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon Books",
						"pub_info": "London: New Beacon Books, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Montserrat: History of a Caribbean Colony",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1994"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Lara Rains & Colonial Rites (Poems)",
				"summary": ["Howard Fergus's poems explore the nature of living on Montserrat, a 'two-be-three island/hard like rock', vulnerable to the forces of nature (Hurricane Hugo and the erupting Soufriere) and still 'this British corridor', with room for poems about cricket."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Volcano Song: Poems of an Island in Agony",
				"summary": ["This work is essentially a poetic diary of Montserrat's Soufriere Hills volcano: its eruption in 1995; the trauma of evacuation and catastrophe which followed; and the tentative return, three years later, of Montserration people to what had once been homes, then exclusion zones. Howard A. Fergus captures the awesome beauty and terror of ash plumes soiling the sky, and the inferno that killed. Occasional pieces portray pre-eruption scences of an everyday life changed forever by the volcano."],
				"editions": [
					{
						"publisher": "Macmillan Education",
						"pub_info": "Macmillan Education, 2000"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Montserrat in the Twentieth Century: Trials and Tribulations",
				"summary": ["Most complete and authoritative account of the history of Montserrat and politics in the 20th century. With useful lists and statistical data appended."],
				"editions": [
					{
						"publisher": "UWI School of Continuing Studies",
						"pub_info": "Montserrat: UWI School of Continuing Studies, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "History of Education in the British Leeward Islands, 1838-1945",
				"summary": [""],
				"editions": [
					{
						"publisher": "University Press of the West Indies",
						"pub_info": "University Press of the West Indies, 2003"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "Volcano Verses (Poems)",
				"summary": ["The poems in Volcano Verses express the confidence that island life and folk will outlast volcanic tantrums, that though ‘Tonight Chances pique still grows/...But cattle low and egrets ride/ Inspite of fire from mountain tides’."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2003."
					}
				]
			}
		]
	},
	{
		"last_name": "Ferguson",
		"first_name": "Merril",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Village of Love",
				"summary": [""],
				"editions": [
					{
						"publisher": "MacGibbon and Kee",
						"pub_info": "London: MacGibbon and Kee, 1960."
					}
				]
			}
		]
	},
	{
		"last_name": "Fernandez",
		"first_name": "Margarite",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Contemporary Women Authors of Latin America: Introductory Essays (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Brooklyn College Press",
						"pub_info": "Brooklyn: Brooklyn College Press, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Pleasure in the Word: Erotic Writings by Latin American Women (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "White Pine Press",
						"pub_info": "Fredonia, New York: White Pine Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Remaking A Lost Harmony - Stories from the Hispanic Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "White Pine Press",
						"pub_info": "Fredonia, New York: White Pine Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Latino Reader: An American Literary Tradition, 1542 to the Present Day (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "New York: Houghton Mifflin Company, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Sacred Possessions Vodou, Santeria, Obeah, and the Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Rutgers University Press",
						"pub_info": "New Brunswick: Rutgers University Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Rudolfo A. Anaya",
				"summary": ["A study of the Chicano author and his seven novels."],
				"editions": [
					{
						"publisher": "Greenwood Publishing Group",
						"pub_info": "Westport, CT: Greenwood Publishing Group, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Healing Cultures: Art and Religion as Curative Practices in the Caribbean and Its Diaspora (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Palgrave",
						"pub_info": "New York: Palgrave, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "U. S. Latino Literature : A Critical Guide for Students and Teachers (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenwood Publishing Group",
						"pub_info": "Westport, CT: Greenwood Publishing Group, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Figueroa",
		"first_name": "John Joseph",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1920",
		"death_day": "",
		"death_month": "",
		"death_year": "1999",
		"bio": ["John Figueroa was born in Jamaica in 1920. He was educated at St George's College, Jamaica and Holy Cross College, Massachusetts; he did postgraduate work at London University. He taught in England, Jamaica, the USA, Uganda and Puerto Rico. In Jamaica he was the first Jamaican to be appointed to a chair at the University College of the West Indies and the first Dean of the Faculty of Education. He finished his teaching career as Professor of Humanities leading the Department of Education of the Centro Caribeno de Estudios Postgraduados, Puerto Rico. He lectured frequently in Europe, particularly in Spain. Figueroa was also the first general editor of the Heinemann Caribbean Writers Series. He died in 1999."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Blue Mountain Peak: Poetry & Prose",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Jamaica: Privately published, 1944."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "Love Leaps Here (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "UK: Privately published, 1962."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Caribbean Voices: An Anthology of West Indian Poetry: Vol. 1, Dreams and Visions (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Evans Brothers",
						"pub_info": "London: Evans Brothers, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Caribbean Voices: An Anthology of West Indian Poetry: Vol. 2, The Blue Horizons (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Evans Brothers",
						"pub_info": "London: Evans Brothers, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Caribbean Voices, Combined Edition (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Evans Brothers",
						"pub_info": "London: Evans Brothers, 1971."
					},
					{
						"publisher": "Luce",
						"pub_info": "Washington, DC: Luce, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Society, Schools and Progress in the West Indies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Pergamon Press",
						"pub_info": "Oxford: Pergamon Press, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "An Anthology of African and Caribbean Writing in English (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "The Chase",
				"summary": ["This retrospective collection, the mature reflections on the passions of a full life from the region’s most ‘classical’ poet, unites the Caribbean and Europe in a vision which is idiosyncratic but undoubtedly nurtured by the Caribbean's sights and sounds."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Flanagan",
		"first_name": "Brenda",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1949",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Brenda Flanagan was born in Trinidad in 1949, the twelfth of fourteen children in an impoverished family. Her father was a barman, her mother a laundress. Brenda Flanagan recalls having a hunger for involvement with the wider world and dreamt of being a writer. She started writing poetry at the age of ten and by thirteen she was singing calypsos and earning money for it. However, at the age of fourteen she had to leave school to help support her family, by then only parented by her mother. She worked for a time in a factory, then was taken on as a trainee reporter of The Nation, the newspaper of the then ruling People's National Movement led by Dr. Eric Williams. In 1967 she left Trinidad for the USA, working initially as a domestic servant. Marriage and motherhood deflected her plans to study, but by 1975, then a single mother, she began undergraduate studies at the University of Michigan. There she won prestigious Hopwood Awards for her short stories, a novel and drama ('When the Jumbie Bird Calls')."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "You Alone Are Dancing",
				"summary": ["Even within the solidarity of a rural Afro-Trinidadian village fighting land speculators and an uncaring government, a young woman learns that she can rely only on herself when a grievous wrong is done to her."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "Ford-Smith",
		"first_name": "Honor",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Lionheart Gal: Life Stories of Jamaican Women (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sister Vision Press",
						"pub_info": "Toronto: Sister Vision Press, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Foster",
		"first_name": "Cecil",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "No Man in the House",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vintage Books",
						"pub_info": "Toronto: Vintage Books, 1991."
					},
					{
						"publisher": "Ballantine",
						"pub_info": "New York: Ballantine, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Sleep On, Beloved",
				"summary": ["Story of a Caribbean immigrant woman who leaves everything behind to build a new life in Canada."],
				"editions": [
					{
						"publisher": "Random House of Canada",
						"pub_info": "Toronto: Random House of Canada, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "A Place Called Heaven: The Meaning of Being Black in Canada",
				"summary": [""],
				"editions": [
					{
						"publisher": "arperCollins Canada",
						"pub_info": "Toronto: HarperCollins Canada, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Island Wings: A Memoir",
				"summary": [""],
				"editions": [
					{
						"publisher": "arperCollins Canada",
						"pub_info": "Toronto: HarperCollins Canada, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Slammin' Tar",
				"summary": ["Bajan migrant farm workers outside of Toronto."],
				"editions": [
					{
						"publisher": "Random House of Canada",
						"pub_info": "Toronto: Random House of Canada, 1998."
					}
				]
			}
		]
	},
	{
		"last_name": "Fraser",
		"first_name": "Fitzroy",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1936",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "Wounds in the Flesh",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hutchinson",
						"pub_info": "London: Hutchinson, 1962."
					}
				]
			}
		]
	},
	{
		"last_name": "Garnatz",
		"first_name": "Jennifer M.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Romantically Erotic Deadly Religious (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mau-Vea Press",
						"pub_info": "Hamburg: Mau-Vea Press, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Gilchrist",
		"first_name": "Rupert",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Dragonard: A Novel",
				"summary": ["A story set in the colonial West Indies of the 18th century when Richard Abdee arrives penniless and starts to carve out a career for himself."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1975."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1976. (Paperback)"
					},
					{
						"publisher": "Corgi",
						"pub_info": "Corgi, 1976. (Paperback)"
					},
					{
						"publisher": "Golden Apple",
						"pub_info": "New York: Golden Apple, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "The Master of Dragonard Hill",
				"summary": ["The second of the thrilling Dragonard novels explores the greed and jealousy that are loosed on The Star Plantation in Louisiana when its owner, Albert Selby discovers that one of the two boys he has bought in New Orleans is the outcast son of the Caribbean tyrant, Richard Abdee."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1976."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1976. (Paperback)"
					},
					{
						"publisher": "Corgi",
						"pub_info": "Corgi, 1977. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Dragonard Blood",
				"summary": ["Third in the Dragonard series, set in Louisiana in 1829."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1977."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1977. (Paperback)"
					},
					{
						"publisher": "Corgi",
						"pub_info": "Corgi, 1978. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Dragonard Rising",
				"summary": ["It is 1802 and a small Carribean island fortress is under the tyrannical rule of a sadistic Englishman who treats the black slaves with extreme brutality."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1978."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1979. (Paperback)"
					},
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Siege of Dragonard Hill",
				"summary": ["When Richard Abdee, brutal Dragonard whipmaster, spawned his powerful dynasty, he also spawned an awesome legacy of sin. Now, four generations later, that legacy has erupted into a sizzling blood-feud."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1979."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1979. (Paperback)"
					},
					{
						"publisher": "Corgi",
						"pub_info": "Corgi, 1980. (Paperback)"
					},
					{
						"publisher": "Golden Apple",
						"pub_info": "New York: Golden Apple, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Guns of Dragonard",
				"summary": ["The Civil War eroded the power of the white man over the black. The Abdee family, cursed for generations by the vast fortune founded on slavery, was caught up in the war. Would this be the end of the Abdee dynasty of Dragonard?"],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1980."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "The House at 3 O'Clock",
				"summary": ["Slaves without Masters Vol 1. Set against the backdrop of reconstruction, with characters from the Ku Klux Klan, as well as the underground movement to restore the traffic in slaves in the late 1860s."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1982."
					},
					{
						"publisher": "Corgi",
						"pub_info": "Corgi, 1983. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "A Girl Called Friday Night",
				"summary": ["Slaves without Masters Vol 2."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Wrong Side of Town",
				"summary": ["Slaves without Masters Vol 3."],
				"editions": [
					{
						"publisher": "Souvenir Press",
						"pub_info": "London: Souvenir Press, 1982."
					},
					{
						"publisher": "The Lesuire Circle",
						"pub_info": "London: The Lesuire Circle, 1985."
					}
				]
			}
		]
	},
	{
		"last_name": "Gilkes",
		"first_name": "Michael",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1935",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Born in Guyana in 1935, Michael Gilkes taught at the University of Guyana, the University of the West Indies in Barbados for many years and at the Sir Arthur Lewis community College in St. Lucia. He has also been a Quillian Visiting Professor at Randolph-Macon Women’s College."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Couvade (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Jonathan Cape",
						"pub_info": "London: Jonathan Cape, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Wilson Harris and the Caribbean Novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Longman, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "19??",
				"title": "The Literate Imagination (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "19??"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "The West Indian Novel",
				"summary": [""],
				"editions": [
					{
						"publisher": "Twayne Publishers",
						"pub_info": "Boston: Twayne Publishers, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "A Pleasant Career",
				"summary": ["A Pleasant Career is a play about the life and fiction of Edgar Mittelholzer. It won the prestigious Guyana Prize for Drama in 1992."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1992"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Joanstown and Other Poems",
				"summary": ["Joanstown recreates, in the voices of younger and older selves, the interweaving of loved person and place (Georgetown) and of a marriage whose seeming perfection leads to hubris. Gilkes brings a painter's eye to his Guyana of fire and flood. Joanstown won the 2002 Guyana Prize as the best collection of poetry."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Gilroy",
		"first_name": "Beryl Agatha",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1924",
		"death_day": "",
		"death_month": "",
		"death_year": "2001",
		"bio": ["Beryl Agatha Gilroy (nee Alnwich) was born on 30 August, 1924 in Skeldon village, in Berbice County in British Guiana. She grew up in a large, extended family, largely under the influence of her maternal grandmother. Her grandmother took the view that the child would learn more by being taken all over the county with her, and being given space for wonder and enquiry, than in the regimented system of primary schooling. As a result Beryl Gilroy did not enter full time schooling until she was twelve. It is clear that much of her grandmother’s influence persisted in Beryl Gilroy’s own philosophy of education (she educated her own children at home) that stressed freedom for discovery within a framework of basic skills. Between 1951-53 she attended the University of London pursuing a Diploma in Child Development. Although a qualified teacher, racism prevented her getting a post for some time, and she had to work as a washer-up at Lyons, a factory clerk and lady’s maid. Between 1970-75 she wrote the pioneering children’s series 'Nippers' which contain probably the first reflection of the Black British presence in UK writing for children. In addition to her fiction and autobiographical books, she was a pioneering teacher and psychotherapist who was awarded an Honorary Doctorate by the University of London and an Honorary Fellowship by the Institute of Education for her writing and pioneering work as a psychotherapist. She died in 2001 at the age of 76."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "New People at Twenty Four",
				"summary": [""],
				"editions": [
					{
						"publisher": "Macmillan",
						"pub_info": "London: Macmillan, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Black Teacher",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cassell",
						"pub_info": "London: Cassell, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Frangipani House",
				"summary": ["Frangipani House is the story of Mama King, trapped by age and infirmity, but ultimately indomitable. She becomes too much for her family who send her away to Frangipani House, a dreary claustrophobic rest home -- but Mama King does not give in. She makes her mark -- first through anguish, then near madness, and finally by escape to the dangerous, dirty, vital world of the poor. Frangipani House is a beautifully written protest at institutions that isolate, and a way of life that denies respect and responsibility for the weak. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Boy Sandwich",
				"summary": ["In her second novel, Beryl Gilroy vividly conveys the ways in which three generations of a West Indian family have been affected by life in Britain. For the grandparents, confined to the tyranny of an old people's home, a collection of sepia photos and memories are a vital link to the Caribbean and a rosy past. Their recollections instill in their grandson, born in the UK and brought up in an environment of racial conflict, the desire to take the family back to their homeland and regain a sense of belonging. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Steadman and Joanna: A Love in Bondage",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "London: Vantage, 1991"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Echoes and Voices (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "London: Vantage, 1991"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Sunlight on Sweet Water",
				"summary": ["Beryl Gilroy transports the reader back to the Guyanese village of her childhood to meet such characters as Mr Dewsbury the Dog Doctor, Mama Darlin' the village midwife and Mr Cumberbatch the Chief Mourner. It was a time when 'children did not have open access to the world of adults and childhood had not yet disappeared', and perhaps for this reason, the men and women who pass through these stories have a mystery and singularity which are as unforgettable for the reader as they were for the child."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "In Praise of Love and Children",
				"summary": ["After false starts in teaching and social work, Melda Hayley finds her mission in fostering the damaged children of the first generation of black settlers in a deeply racist Britain."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Gather the Faces",
				"summary": ["Marvella Payne is twenty-seven, works as a secretary for British Rail and has pledged to the congregation of the Church of the Holy Spirit that she will abstain from sex before marriage. When she repulses the groping hands of the trainee-deacon, Carlton Springle, she resigns herself to growing old with her mother, father and Bible-soaked aunts. But Aunt Julie has other ideas and finds Marvella a penfriend from her native Guyana. When good fortune allows the couple to meet, Marvella awakens to new possibilities as she realises how bound she has been by the voices of her dependent, cossetted childhood. But will marriage be another entrapment, another loss of self?"],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Inkle and Yarico",
				"summary": ["As a young man of twenty, Thomas Inkle sets out for Barbados to inspect the family sugar estates. On the way he is shipwrecked on a small West Indian island inhabited by Carib Indians. He alone escapes as his shipmates are slaughtered, and is rescued by Yarico, a Carib woman who takes him as, 'an ideal, strange and obliging lover.' So begins an erotic encounter, explored with poetic, imaginative intensity, which has a profound effect on both. Inkle and Yarico is loosely based on a 'true' story which became a much repeated popular narrative in the 17th and 18th centuries. Beryl Gilroy reinterprets its mythic dimensions from both a woman's and a black perspective, but above all she engages the reader in the psychological truths of her characters' experiences."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "The Green Grass Tango",
				"summary": ["When Alfred Grayson, a retired and recently widowed civil servant, decides to buy a dog, Sheba gives him a passport to the diverse multi-racial community of dog-walkers and bench-sitters who meet in a down-at-heel London park."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Glissant",
		"first_name": "Edouard",
		"birth_city": "",
		"birth_country": "Martinique",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Edouard Glissant, poet as well as novelist, was born in Martinique in 1928. La Lezarde was first awarded the Prix Renaudot when it was published in Paris in 1958."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Ripening",
				"summary": ["Originally published in French under the title La lezarde. This extraordinary novel tells the story of the rise to political maturity of eight young Martinicans, and their plans to stage a political murder. Concerned for the justice of the forthcoming elections, they fix upon a government agent who stands in the way of the people. They determine to kill him and, as their instrument, they choose Thael, an unsophisticated shepherd from the hills. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "George Braziller",
						"pub_info": "Paris: Editions Du Seuil, 1958."
					},
					{
						"publisher": "George Braziller",
						"pub_info": "New York: George Braziller, 1959."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "Heinemann, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Monsieur Toussaint (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "France, 1961."
					},
					{
						"publisher": "Editions Elora C. Elessi",
						"pub_info": "Washington, DC: Three Continents Press, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "L'intention poetique",
				"summary": [""],
				"editions": [
					{
						"publisher": "Editions du Seuil, Pierres Vives",
						"pub_info": "Paris: Editions du Seuil, Pierres Vives, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Brauner",
				"summary": [""],
				"editions": [
					{
						"publisher": "Editions Elora C. Elessi",
						"pub_info": "Paris: Editions Elora C. Elessi, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Caribbean Discourse Selected Essays",
				"summary": ["A collection of essays on the history of Martinique, focusing on the economic, social, and cultural."],
				"editions": [
					{
						"publisher": "University Press of Virginia",
						"pub_info": "Charlottesville, VA: University Press of Virginia, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Poetics of Relation",
				"summary": ["Originally published in French under the title Poetique de la relation."],
				"editions": [
					{
						"publisher": "Éditions Gallimard",
						"pub_info": "Paris: Éditions Gallimard, 1990."
					},
					{
						"publisher": "University of Michigan",
						"pub_info": "Ann Arbor: University of Michigan, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Faulkner, Mississippi",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "France, 1996."
					},
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus & Giroux, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Malemort",
				"summary": [""],
				"editions": [
					{
						"publisher": "Éditions Gallimard",
						"pub_info": "Paris: Éditions Gallimard, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Black Salt (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Michigan",
						"pub_info": "Ann Arbor: University of Michigan, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "The Fourth Century",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Nebraska Press",
						"pub_info": "Lincoln: University of Nebraska Press, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Gomes",
		"first_name": "Albert",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1937",
				"title": "From Trinidad, a Selection from the Fiction and Verse of the Island of Trinidad, British West Indies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Frasers' Printerie",
						"pub_info": "Port-of-Spain: Frasers' Printerie, 1937."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Through a Maze of Colour",
				"summary": [""],
				"editions": [
					{
						"publisher": "Key Caribbean Publications",
						"pub_info": "Trinidad: Key Caribbean Publications, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "All Papa's Children",
				"summary": [""],
				"editions": [
					{
						"publisher": "Cairi Publishing House",
						"pub_info": "London: Cairi Publishing House, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Goodison",
		"first_name": "Lorna",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Tamarind Season (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Institute of Jamaica",
						"pub_info": "Kingston: The Institute of Jamaica [1980]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Baby Mother and the King of Swords (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Essex: Longman, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Baby Mother and the King of Swords",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "Essex: Longman, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Selected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "University Of Michigan Press",
						"pub_info": "Ann Arbor: University Of Michigan Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "To Us, All Flowers Are Roses (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Illinois Press",
						"pub_info": "Urbana: University of Illinois Press, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Turn Thanks (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "University of Illinois Press",
						"pub_info": "Urbana IL: University of Illinois Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Guinea Woman: New and Selected Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "Carcanet",
						"pub_info": "Manchester: Carcanet, 2000. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Travelling Mercies",
				"summary": [""],
				"editions": [
					{
						"publisher": "BPR Publishers",
						"pub_info": "New Providence, NJ: BPR Publishers, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Gosine",
		"first_name": "Vishnu Ramsamooj",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1946",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Vishnu Gosine was born in rural Trinidad in 1946. His grandparents were both indentured immigrants from India, working in the sugar cane fields. After he left school, Vishnu Gosine worked as a mailboy, clerk and then as a teacher. He was one of the first graduates of the Corinth Teacher’s College. He currently works in a secondary school near Couva. He began writing many years ago and has been as active in the encouragement of others as in pursuing his own work. He was editor of a quarterly magazine, Corlit, and for a long time has been an active member of the Writer’s Union of Trinidad & Tobago. He is a regular book reviewer in the Trinidadian press. His stories have been published in the Trinidad and Tobago Review, Bim, The New Voices, Toronto South Asian Review, The Caribbean Writer and in a number of anthologies."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Coming of Lights",
				"summary": ["A thought-provoking novel for 11-14 year olds which deals with the themes of injustice, compassion and forgiveness. Set in rural Trinidad, The Coming of Lights makes evident the relevance of Hindu teaching in the contemporary world."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "Goulbourne",
		"first_name": "Jean",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Jean Goulbourne was born in rural Jamaica in St Elizabeth, and grew up in Cross Keys, Manchester. She went to school at Mandeville High and Excelsior in Kingston. She read History at the University of the West Indies, Mona, and then took a Diploma in Education. She began teaching in the impoverished area of Ginger Ridge in St Catherine in 1971, later at Penwood, and the poems she began writing at this time reflect her distress and anger at what she saw. In addition to teaching, she worked in the Publications Unit of the Ministry of Education."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Actors in the Arena (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Savacou",
						"pub_info": "Savacou, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Under the Sun (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "The New Voices",
						"pub_info": "Trinidad: The New Voices, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Excavation",
				"summary": ["A novel. When a group of Jamaican students and their lecturers begin an archaeological dig on the old estate of Plantation Plains, each has different expectations. 'Jean Goulbourne’s Excavation gives a refreshing perspective on a subject that has long troubled the West Indies - the nature of identity in a multiracial society haunted by a history of colonialism...Goulbourne’s writing style is stimulating - especially in the portrayal of the island’s landscape - and as she draws the reader into the lives of her characters, we gain a fresh perspective on West Indian culture, history, and politics.' - Geoffrey Philp, The Caribbean Writer."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Woman Song (Poems)",
				"summary": ["In Woman Song, Jean Goulbourne articulates the grief, hopes and unquenchable spirit of black women in the Caribbean. She writes with the directness of the reggae lyric, with both pungency and humour, and with an aphoristic economy which has the art of saying more with less. Her poems encompass the lives of women old and young; middle-class and sufferers; women whose lives are enclosed, who want liberation from the 'station of motherhood, wifehood and frustration', and women who through their resistance, creativity and assertion of selfhood have made space for themselves. The celebration of such lives stands as a beacon of hope in the depiction of Jamaican society in which rape, poverty and abandonment are too frequently women's lot."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Gray",
		"first_name": "Cecil",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1923",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Cecil Gray was born in Port of Spain, Trinidad in modest circumstances in 1923. Reading and schooling provided him with a route towards security, a gift he has repaid by his lifelong commitment to education. He obtained a teacher’s certificate and an external degree from London University. For many years he taught at UWI St Augustine, training secondary teachers in teaching English. In 1976 he was awarded the Medal of Merit, Class One, Gold, by the Trinidadian Government for his meritorious service in education and culture. His proudest achievement was to have made a key contribution to getting West Indian literature accepted in schools. His lecturing activities in this period undoubtedly held back his own writing, though he had poems published in Bim, Kyk-over-Al, Trinidad and Tobago Review, Savacou, The Greenfield Review and Caribbean Quarterly. However, it was only after he migrated to Canada in 1988, with the hope that distance would enable him to write, that the poems flowed."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Woolgatherer (Poems)",
				"summary": ["A richly autobiographical collection from a much anthologised Trinidadian poet which, with an astringency of vision and wry humour, confronts the remembered humiliations of childhood poverty and celebrates the liberating power of education."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Lillian's Songs (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-published, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Leaving the Dark (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-published, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Plumed Palms (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-published, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Greaves",
		"first_name": "Stanley",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Stanley Greaves was born in Guyana. He studied Art in the UK and was head of the Division of Creative Arts at the University of Guyana for several years. He left Guyana in the 1980s and has been resident in Barbados since that time. He is one of the Caribbean’s most distinguished artists with major exhibitions in the UK (The Elders, with Brother Everald Brown) and Europe as well as throughout the Caribbean. In addition to his poetry and painting, he is also an accomplished classical guitarist."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Horizons (Poems)",
				"summary": ["Stanley Greaves brings a painter’s perceptions and a musician’s ear to the writing of this substantial selection of his poetry written over the past forty years. He describes his painting as ‘a kind of allegorical story-telling’ and the same kind of connections between the concrete and the metaphysical, and the presence of the extraordinary in the ordinary are found in his poems. This collection won the 2002 Guyana Prize for the best first collection of poetry."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Guy",
		"first_name": "Rosa",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Bird at My Window",
				"summary": [""],
				"editions": [
					{
						"publisher": "J.B. Lippincott",
						"pub_info": "Philadelphia: J.B. Lippincott, 1966."
					},
					{
						"publisher": "Souvenir",
						"pub_info": "[London] Souvenir [1966]."
					},
					{
						"publisher": "Virago",
						"pub_info": "London: Virago, 1989. (Paperback)"
					},
					{
						"publisher": "Coffee House Press",
						"pub_info": "Minneapolis: Coffee House Press, 2001. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "70",
				"title": "Children of Longing (Editor)",
				"summary": ["Essays by young black Americans about their lives and their relationship to society."],
				"editions": [
					{
						"publisher": "Holt, Rinehart and Winston",
						"pub_info": "New York: Holt, Rinehart and Winston, 1970."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1970. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Friends",
				"summary": [""],
				"editions": [
					{
						"publisher": "Holt, Rinehart and Winston",
						"pub_info": "New York: Holt, Rinehart and Winston, 1973."
					},
					{
						"publisher": "Gollancz",
						"pub_info": "London: Gollancz, 1974."
					},
					{
						"publisher": "Bantam",
						"pub_info": "New York: Bantam, 1974. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Ruby",
				"summary": [""],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Edith Jackson",
				"summary": [""],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1978."
					},
					{
						"publisher": "Gollancz",
						"pub_info": "London: Gollancz, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Disappearance",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte, 1979."
					},
					{
						"publisher": "Gollancz",
						"pub_info": "London: Gollancz, 1979."
					},
					{
						"publisher": "Dell",
						"pub_info": "New York: Dell, 1992. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Mirror of Her Own",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Mother Crocodile",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte, 1981."
					},
					{
						"publisher": "Doubleday",
						"pub_info": "New York: Doubleday, 1993"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "A Measure of Time",
				"summary": [""],
				"editions": [
					{
						"publisher": "Holt, Rinehart and Winston",
						"pub_info": "New York: Holt, Rinehart and Winston, 1983."
					},
					{
						"publisher": "Harcourt Canada",
						"pub_info": "Toronto: Harcourt Canada, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "New Guys Around the Block",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte [1983]."
					},
					{
						"publisher": "Gollancz",
						"pub_info": "London: Gollancz, 1983."
					},
					{
						"publisher": "Dell",
						"pub_info": "New York: Dell, 1983. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Paris, Pee Wee and Big Dog",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "[New York] Delacorte [1984]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "My Love, My Love or, The Peasant Girl",
				"summary": [""],
				"editions": [
					{
						"publisher": "Holt, Rinehart and Winston",
						"pub_info": "New York: Holt, Rinehart and Winston, 1985."
					},
					{
						"publisher": "Coffee House Press",
						"pub_info": "Minneapolis: Coffee House Press, 2002. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "And I Heard a Bird Sing",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte [1987]."
					},
					{
						"publisher": "Gollancz",
						"pub_info": "London: Gollancz, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "The Ups and Downs of Carl Davis III",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "New York: Delacorte [1989]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Music of Summer",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "[New York] Delacorte [1992]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Billy the Great",
				"summary": [""],
				"editions": [
					{
						"publisher": "Delacorte",
						"pub_info": "[New York] Delacorte [1992]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "The Sun, The Sea, A Touch of the Wind",
				"summary": [""],
				"editions": [
					{
						"publisher": "Dutton",
						"pub_info": "[New York] Dutton [1995]."
					}
				]
			}
		]
	},
	{
		"last_name": "Hallworth",
		"first_name": "Grace",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Open Mouth, Story Jump Out",
				"summary": [""],
				"editions": [
					{
						"publisher": "Methuen Children's Books",
						"pub_info": "London: Methuen Children's Books, 1984."
					},
					{
						"publisher": "Mammoth",
						"pub_info": "Mammoth 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Down the River: Afro-Caribbean Rhymes Games & Songs for Children (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mammoth",
						"pub_info": "Mammoth 1989."
					},
					{
						"publisher": "Scholastic",
						"pub_info": "New York: Scholastic, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "A Web of Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Mammoth",
						"pub_info": "Mammoth 19??."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Sing Me a Story!",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Cric Crac: A Collection of West Indian Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Going to School",
				"summary": [""],
				"editions": [
					{
						"publisher": "Foundation Books Cambridge Reading",
						"pub_info": "Foundation Books Cambridge Reading. 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Gracie's Cat",
				"summary": [""],
				"editions": [
					{
						"publisher": "Foundation Books Cambridge Reading",
						"pub_info": "Foundation Books Cambridge Reading. 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Sleep Tight",
				"summary": [""],
				"editions": [
					{
						"publisher": "Foundation Books Cambridge Reading",
						"pub_info": "Foundation Books Cambridge Reading. 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Harris",
		"first_name": "Denise",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1950",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Denise Harris was born in Georgetown Guyana in 1950, the daughter of the novelist Wilson Harris. Her uncle is the Guyanese writer, Jan Carew. She has worked for UNICEF for many years, in Beijing (3 years), Barbados (2 years) and Jamaica (13 years), where she also worked as a freelance photographer. She currently works for UNICEF in New York."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Web of Secrets",
				"summary": ["Described by the author as as ‘fictional autobiography,’ this novel gives a picture of a sensitive child suffering considerably from the stress of marital breakdown, the African-Indian racial violence of early 1960’s Georgetown and the failure of the family to confront the racial tensions within it."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Harris",
		"first_name": "Wilson",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1921",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "Fetish",
				"summary": ["Poems published under the pseudonym Kona Waruk."],
				"editions": [
					{
						"publisher": "The Miniature Poets",
						"pub_info": "British Guiana: The Miniature Poets, 1951."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "The Well and the Land (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1952"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "Eternity to Season (Poems)",
				"summary": ["The 1954 edition was published under the pseudonym Kona Waruk."],
				"editions": [
					{
						"publisher": "Privately Published",
						"pub_info": "Guyana: Privately Published, 1954."
					},
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon [1978]. (Cloth and paper)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Palace of the Peacock",
				"summary": ["A novel set in Guyana. Later collected in The Guyana Quartet."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1960]."
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1968]. (Trade paperback)"
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1988]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "The Far Journey of Oudin",
				"summary": ["A novel set in Guyana. Later collected in The Guyana Quartet."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1961]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "The Whole Armour",
				"summary": ["A novel set in Guyana. Later collected in The Guyana Quartet. Also later collected in The Whole Armour and The Secret Ladder."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1962]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "The Secret Ladder",
				"summary": ["A novel set in Guyana. Later collected in The Guyana Quartet. Also later collected in The Whole Armour and The Secret Ladder."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1963]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Heartland",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1964]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Eye of the Scarecrow",
				"summary": ["A novel set in Guyana."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1965]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Waiting Room",
				"summary": ["A novel set in Guyana."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1967]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Tradition the Writer and Society",
				"summary": ["A collection of critical essays. Includes 'Art and Criticism,' 'The Question of Form and Realism in the West Indian Artist,' 'Books--A Long View,' 'Tradition and The West Indian Novel,' 'The Writer and Society,' 'Struggle of the Modern,' and 'C. L. R. James's Introduction to Tradition and The West Indian Novel.'"],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon [1967]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Tumatumari",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1968]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Ascent to Omai",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1970]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Sleepers of Roraima: A Carib Trilogy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1970]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Age Of the Rainmakers",
				"summary": ["A collection of four fables. Illustrated with line drawings by Karen Usborne."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1971]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Black Marsden",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1972]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "The Whole Armour and The Secret Ladder",
				"summary": ["Two novels originally published in 1962 and 1963."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1973]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Companions of the Day and Night",
				"summary": ["This novel further develops the tabula rasa theme that ran through the earlier novel, Black Marsden. During a sojourn in Mexico lasting both days and centuries, a faceless and many-faced narrator records in diary form various encounters and episodes."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1975]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "DaSilva DaSilva's Cultivated Wilderness and Genesis of the Clowns",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1977]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Tree Of The Sun",
				"summary": ["A sequel to the novel Da Silva da Silva's Cultivated Wilderness."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1978]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Explorations: A Selection of Talks and Articles 1966 - 1981",
				"summary": ["A collection of 14 essays and talks.  Most were previously published in various journals; some are revised.  With an introduction by Hena Maes-Jelinek."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Denmark] Dangaroo Press [1981]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Angel At The Gate",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1982]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "The Womb of Space: The Cross-Cultural Imagination",
				"summary": [""],
				"editions": [
					{
						"publisher": "Greenwood Press",
						"pub_info": "Westport, Connecticut: Greenwood Press, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Carnival",
				"summary": ["A Dantesque spiritual journey through time and space in which the Caribbean carnival of masks acquires a transcendental resonance. Later collected in The Carnival Trilogy."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1985]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Guyana Quartet",
				"summary": ["Collects the previous novels Palace of the Peacock, The Far Journey of Oudin, The Whole Armour and The Secret Ladder. Includes an introduction titled 'A Note on the Genesis of The Guyana Quartet' by Wilson Harris."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1985]."
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1985]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Infinite Rehearsal",
				"summary": ["Later collected in The Carnival Trilogy."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1987]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "The Four Banks of the River of Space",
				"summary": ["Later collected in The Carnival Trilogy."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1990]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Resurrection at Sorrow Hill",
				"summary": ["A novel of exploration, quest, danger, adultry, breakdown, and violent death. Set in Guyana."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1993]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Carnival Trilogy",
				"summary": ["Collects the previous novels The Infinite Rehearsal, The Four Banks of the River of Space and Resurrection at Sorrow Hill. Includes an introduction by Wilson Harris."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1993]."
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1993]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Jonestown",
				"summary": ["An exploration of the mass-suicide at Jonestown, as narrated by a fictional survivor."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1996]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Merlin & Parsifal: Adversarial Twins",
				"summary": ["A paper that was given at The Temenos Academy by the Guyana-born author on 21st April 1997."],
				"editions": [
					{
						"publisher": "Temenos Academy",
						"pub_info": "London: Temenos Academy, 1997. (Pamphlet)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "The Dark Jester",
				"summary": ["An exploration of the mass-suicide at Jonestown, as narrated by a fictional survivor."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [2001]. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Hearne",
		"first_name": "John",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1926",
		"death_day": "",
		"death_month": "",
		"death_year": "1994",
		"bio": ["John Hearne was born in Montreal but grew up in Jamaica, where both sides of his family have been settled since the early part of the eighteenth century."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "Voices Under the Window",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1955]."
					},
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1985]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "Stranger at the Gate",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1956]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "The Faces of Love",
				"summary": ["Published in the United States as The Eye of the Storm."],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1957]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "The Eye of the Storm",
				"summary": ["Originally published in London as The Faces of Love."],
				"editions": [
					{
						"publisher": "Little, Brown",
						"pub_info": "Boston: Little, Brown [1957]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "The Autumn Equinox",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1959]."
					},
					{
						"publisher": "Vanguard",
						"pub_info": "New York: Vanguard, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "The Land of the Living",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber [1961]."
					},
					{
						"publisher": "Harper & Row",
						"pub_info": "New York: Harper & Row [1962]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Our Heritage",
				"summary": ["A 56-page pamphlet co-authored with Rex Nettleford."],
				"editions": [
					{
						"publisher": "University of the West Indies",
						"pub_info": "No place: Department of Extra-Mural Studies, University of the West Indies, [1963]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Fever Grass",
				"summary": ["A thriller co-authored with Morris Cargill and published under the pseudonym John Morris."],
				"editions": [
					{
						"publisher": "Collins and Sangster",
						"pub_info": "[London/Kingston] Collins and Sangster, 1969."
					},
					{
						"publisher": "G.P. Putnam's Sons",
						"pub_info": "New York: G.P. Putnam's Sons, 1969."
					},
					{
						"publisher": "Berkley",
						"pub_info": "New York: Berkley, 1971. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Candywine Development",
				"summary": ["A thriller co-authored with Morris Cargill and published under the pseudonym John Morris."],
				"editions": [
					{
						"publisher": "Collins and Sangster",
						"pub_info": "[London/Kingston] Collins and Sangster, 1970."
					},
					{
						"publisher": "Citadel Press",
						"pub_info": "Secaucus. NJ: Citadel Press [1971]."
					},
					{
						"publisher": "Dell",
						"pub_info": "New York: Dell, 1974. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Checkerboard Caper",
				"summary": ["A thriller co-authored with Morris Cargill and published under the pseudonym John Morris."],
				"editions": [
					{
						"publisher": "Citadel Press",
						"pub_info": "Secaucus. NJ: Citadel Press [1975]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Carifesta Forum: An Anthology of 20 Caribbean Voices (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Institute of Jamaica",
						"pub_info": "[Kingston] Institute of Jamaica [1976]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "The Sure Salvation",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London/Boston: Faber and Faber [1981]."
					},
					{
						"publisher": "St. Martins",
						"pub_info": "New York: St. Martins, 1982."
					}
				]
			}
		]
	},
	{
		"last_name": "Heath",
		"first_name": "Roy A. K.",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1926",
		"death_day": "",
		"death_month": "",
		"death_year": "2008",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "A Man Come Home",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Murderer",
				"summary": [""],
				"editions": [
					{
						"publisher": "Allison and Busby",
						"pub_info": "London: Allison and Busby, 1978."
					},
					{
						"publisher": "Allison and Busby",
						"pub_info": "London: Allison and Busby, 1979. (Trade paperback)"
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1984. (Paperback)"
					},
					{
						"publisher": "Persea Books",
						"pub_info": "New York: Persea Books [1992]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "From the Heat of the Day",
				"summary": ["A novel set in Guyana. Later collected in The Armstrong Trilogy."],
				"editions": [
					{
						"publisher": "Allison and Busby",
						"pub_info": "London: Allison and Busby, 1979. (Cloth and trade paper)"
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1984. (Paperback)"
					},
					{
						"publisher": "Persea Books",
						"pub_info": "New York: Persea Books [1992]."
					},
					{
						"publisher": "Persea Books",
						"pub_info": "New York: Persea Books [1993].(Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "One Generation",
				"summary": ["A novel set in Guyana. Later collected in The Armstrong Trilogy."],
				"editions": [
					{
						"publisher": "Allison and Busby",
						"pub_info": "London: Allison and Busby, 1981. (Cloth and trade paper)"
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Genetha",
				"summary": ["A novel set in Guyana. Later collected in The Armstrong Trilogy."],
				"editions": [
					{
						"publisher": "Allison & Busby",
						"pub_info": "London: Allison & Busby [1981]. (Cloth and trade paper)"
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Kwaku or The man who could not keep his mouth shut",
				"summary": [""],
				"editions": [
					{
						"publisher": "Allison & Busby",
						"pub_info": "London: Allison & Busby [1982]."
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1985. (Paperback)"
					},
					{
						"publisher": "Marion Boyars",
						"pub_info": "New York: Marion Boyars, 1997. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Orealla",
				"summary": [""],
				"editions": [
					{
						"publisher": "Marion Boyars",
						"pub_info": "London: Allison & Busby [1984]."
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1986. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "The Shadow Bride",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1988."
					},
					{
						"publisher": "Persea Books",
						"pub_info": "New York: Persea Books, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Shadows Round the Moon: Caribbean Memoirs",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1990."
					},
					{
						"publisher": "Flamingo",
						"pub_info": "London: Flamingo, 1991. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Armstrong Trilogy",
				"summary": ["Collects the previous novels From the Heat of the Day, One Generation and Genetha."],
				"editions": [
					{
						"publisher": "Persea Books",
						"pub_info": "New York: Persea Books [1994]. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Ministry of Hope",
				"summary": [""],
				"editions": [
					{
						"publisher": "Marion Boyars",
						"pub_info": "London/New York: Marion Boyars, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Hemming",
		"first_name": "Wilbert Emanuel",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Meeting at the Bend",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stockwell",
						"pub_info": "Ilfracombe: Stockwell, 1970."
					}
				]
			}
		]
	},
	{
		"last_name": "Henfrey",
		"first_name": "June",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Coming Home and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 199?."
					}
				]
			}
		]
	},
	{
		"last_name": "Hercules",
		"first_name": "Frank",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Where the Hummingbird Flies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Harcourt, Brace",
						"pub_info": "New York: Harcourt, Brace, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "I Want a Black Doll",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1967."
					},
					{
						"publisher": "Simon and Schuster",
						"pub_info": "New York: Simon and Schuster, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "American Society and Black Revolution",
				"summary": [""],
				"editions": [
					{
						"publisher": "Harcourt Brace Jovanovich",
						"pub_info": "New York: Harcourt Brace Jovanovich [1972]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "On Leaving Paradise",
				"summary": [""],
				"editions": [
					{
						"publisher": "Harcourt Brace Jovanovich",
						"pub_info": "New York: Harcourt Brace Jovanovich [1980]."
					}
				]
			}
		]
	},
	{
		"last_name": "Heydorn",
		"first_name": "Bernard",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Walk Good Guyana Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Learning Improvement Centre",
						"pub_info": "Ontario: Learning Improvement Centre, 1994. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Unlit Roads",
				"summary": [""],
				"editions": [
					{
						"publisher": "Learning Improvement Centre",
						"pub_info": "Ontario: Learning Improvement Centre, 1994. (Trade paperback)"
					},
					{
						"publisher": "Learning Improvement Centre",
						"pub_info": "Ontario: Learning Improvement Centre, 2000. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Carnival Girl",
				"summary": [""],
				"editions": [
					{
						"publisher": "Learning Improvement Centre",
						"pub_info": "Ontario: Learning Improvement Centre, 1996. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Longtime Days",
				"summary": [""],
				"editions": [
					{
						"publisher": "Learning Improvement Centre",
						"pub_info": "Ontario: Learning Improvement Centre, 1999. (Trade paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Hilton",
		"first_name": "Anne",
		"birth_city": "",
		"birth_country": "[unknown]" ,
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "The Story of a Streak Lizard",
				"summary": [""],
				"editions": [
					{
						"publisher": "Publishing Associates",
						"pub_info": "Port of Spain: Publishing Associates, 1977."
					}
				]
			}
		]
	},
	{
		"last_name": "Hodge",
		"first_name": "Charles Borromeo",
		"birth_city": "",
		"birth_country": "St. Martin",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1939",
		"death_day": "",
		"death_month": "",
		"death_year": "1998",
		"bio": ["Charles Borromeo Hodge was born on November 9, 1939, to St.Martin parents in San Nicholas, Aruba. He was raised by his grandmother, Ann Catherine Hodge, in St.Martin, where he attended St. Joseph School. He completed elementary and high school (HBS) in Curacao, where he won the Neerlandia Prijs for composition writing. In 1959, Hodge, with high school diploma in hand, headed home, again. That same year, the grass roots political activist Leonides 'Bahba' Richardson, introduced Hodge to the nation's father of journalism and political progressive Joseph H. Lake. Sr. Lake's influence on Hodge's writing and political development would be profound and not without controversy. Hodge's first poem, 'The Rock,' appeared in a 1959 issue of Lake's Winward Islands Opinion. He also wrote articles 'of a radical nature,' at a time when many St.Martiners hid in the alleys of Great Bay (Philipsburg) to buy the Opinion newspaper, because of its writings against 'slave wages' and the political system that were 'keeping down people.' In 1970, Hodge emigrated to Harlem, USA. In that 'Black Mecca' of New York City, the St. Martiner wrote most of the poems of his first volume, Songs & Images for St.Martin (1997). In 1991, Hodge returned to St.Martin, 'to stay.' After his return home, his poems, short stories, essays, and commentaries appeared with ravenous persistency in especially the daily St.Maarten Guardian. The senior poet's writings also appeared regularly in the nation's other publications until his death in 1998."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Songs & Images for St.Martin (Poems)",
				"summary": ["Borromeo is a strong, reverberating poetic voice nobody dares ignore. What took him so long to come out with this volume? - Fabian Badejo, St. Maarten Guardian"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1997. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Hodge",
		"first_name": "Merle",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Crick Crack Monkey",
				"summary": ["A revealing novel of childhood about Tee who is being made socially acceptable by her Aunt Beatrice so that she can cope with the caste system of Trinidad & Tobago. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "Andre Deutsch",
						"pub_info": "London: Andre Deutsch, 1970."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "For the Life of Laetitia",
				"summary": [""],
				"editions": [
					{
						"publisher": "Farrar Straus Giroux",
						"pub_info": "New York: Farrar Straus Giroux, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Holder",
		"first_name": "Geoffrey",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1930",
		"death_day": "",
		"death_month": "",
		"death_year": "2014",
		"bio": ["Towering, breathtakingly limber interpretive dancer Geoffrey Holder was born in Trinidad and educated at Queens Royal College. Holder's first professional dancing gig was in his brother Roscoe's travelling troupe. He toured the West Indies and Puerto Rico before making his New York stage debut in the 1954 Broadway musical House of Flowers. Heading his own troupe from 1956 onward, Holder appeared as both an ensemble dancer and as soloist and choreographer in 'outside' productions. He made his dramatic bow in 1957 in the near-mime role of Lucky in 'Waiting for Godot.' His subsequent stage work has earned him numerous awards, including two Tonys--one for direction, the other for costume design--for 1974's 'The Wiz.' His film roles leaned towards the exotic, e.g. Baron Samedi in the 1973 James Bond thriller 'Live and Let Die' (1973) and Punjab in 'Annie' (1981). He is best known to TV fans for his series of mid-1970 Seven Up commercials, in which he elegantly and laughingly extoled the virtues of 'Un-Cola Nuts.' Outside of his theatrical and film accomplishments, Holder is an accomplished painter, his works having been showcased in several major international exhibitions. He is also the author of several books. Geoffrey Holder is married to dancer Carmen de Lavallade. [Biography from 'The Caribbean Hall of Fame']"],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Black Gods, Green Islands: Folk Tales of the Caribbean",
				"summary": ["Co-authored with Tom Harshman"],
				"editions": [
					{
						"publisher": "Doubleday",
						"pub_info": "New York: Doubleday, 1959."
					},
					{
						"publisher": "Greenwood Publishing Group",
						"pub_info": "Westport, CT: Greenwood Publishing Group, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Geoffrey Holder's Caribbean Cookbook",
				"summary": [""],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "A.D.A.M",
				"summary": ["A collection of black and white photographs of male nudes."],
				"editions": [
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Honeyghan",
		"first_name": "Glasceta",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Father Sleeps with the Mudpies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Calaloux",
						"pub_info": "Massachusetts: Calaloux, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Hopkinson",
		"first_name": "Nalo",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["This woman from Trinidad and Jamaica now lives in Canada. Her melange of Caribbean traditions and folklore with science fiction, written in a variation of Creole, has gained her much acclaim and a long list of awards and nominations."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Brown Girl in the Ring",
				"summary": ["This first novel won the John W. Campbell award for best new writer, the Aspect first novel contest, and was a finalist for the Philip K. Dick award."],
				"editions": [
					{
						"publisher": "Warner Aspect",
						"pub_info": "New York: Warner Aspect, 1998. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Midnight Robber",
				"summary": ["A Caribbean-style science fiction novel. This book was a Hugo nominee, on the Tiptree shortlist and was a NY Times Book Review notable book for 2000."],
				"editions": [
					{
						"publisher": "Warner Aspect",
						"pub_info": "New York: Warner Aspect, 2000. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Skin Folk",
				"summary": ["A richly vibrant collection of short fiction that ranges from Trinidad to Toronto and is powerful and sensual. Winner of the 2002 World Fantasy Award."],
				"editions": [
					{
						"publisher": "Warner",
						"pub_info": "New York: Warner, 2001. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Hosein",
		"first_name": "Clyde",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "The Killing of Nelson John and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "London Magazine Editions",
						"pub_info": "London, Ontario: London Magazine Editions, 1980."
					}
				]
			}
		]
	},
	{
		"last_name": "Humfrey",
		"first_name": "Michael",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Portrait of a Sea Urchin: A Caribbean Childhood",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins and Harvill",
						"pub_info": "London: Collins and Harvill, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "A Kind of Armour",
				"summary": [""],
				"editions": [
					{
						"publisher": "John Murray",
						"pub_info": "London: John Murray, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "A Shadow in the Weave",
				"summary": [""],
				"editions": [
					{
						"publisher": "Overlook Press",
						"pub_info": "New York: Overlook Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "No Tears for Massa's Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "John Murray",
						"pub_info": "London: John Murray Ltd. 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Hutchinson",
		"first_name": "Lionel",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "Behind the Mace: An Introduction to the Barbados House of Assembly",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "Bridgetown: Advocate, 1951."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Man from the People",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "One Touch of Nature",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1971."
					}
				]
			}
		]
	},
	{
		"last_name": "Iremonger",
		"first_name": "Lucille",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "Creole",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hutchinson",
						"pub_info": "London: Hutchinson, 1950."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "The Cannibals",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hammond & Co.",
						"pub_info": "London: Hammond & Co., 1952."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "The Young Traveler in The West Indies",
				"summary": [""],
				"editions": [
					{
						"publisher": "E. P. Dutton & Co.",
						"pub_info": "New York: E. P. Dutton & Co., 1955."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "West Indian Folktales",
				"summary": [""],
				"editions": [
					{
						"publisher": "George G. Harrap",
						"pub_info": "UK: George G. Harrap, 1956,"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "Ghosts of Versailles: Miss Moberly and Miss Jourdain and Their Adventure",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber, 1957."
					},
					{
						"publisher": "White Lion Publishers",
						"pub_info": "London: White Lion Publishers, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Love and the Princesses: The Strange Lives of Mad King George III and his Daughters",
				"summary": [""],
				"editions": [
					{
						"publisher": "Faber and Faber",
						"pub_info": "London: Faber and Faber, 1958."
					},
					{
						"publisher": "Thomas Crowell",
						"pub_info": "New York: Thomas Crowell, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "And His Charming Lady",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg,",
						"pub_info": "London: Secker & Warburg, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Fiery Chariot: A Study of British Prime Ministers and the Search for Love",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg,",
						"pub_info": "London: Secker & Warburg, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "How Do I Love Thee: Love Story of Robert & Elizabeth Barrett Browning",
				"summary": [""],
				"editions": [
					{
						"publisher": "Michael Joseph",
						"pub_info": "London: Michael Joseph, 1976."
					},
					{
						"publisher": "William Morrow",
						"pub_info": "New York: William Morrow, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Lord Aberdeen: A Biography of the Fourth Earl of Aberdeen, K.G., K.T., Prime Minister 1852-1855",
				"summary": [""],
				"editions": [
					{
						"publisher": "Collins",
						"pub_info": "London: Collins, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "My Sister, My Love: A Novel About the Life of Lord Byron and His Love Affair with His Half Sister",
				"summary": [""],
				"editions": [
					{
						"publisher": "William Morrow",
						"pub_info": "New York: William Morrow, 1981."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Orphans of the Heart",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker & Warburg",
						"pub_info": "London: Secker & Warburg, 1984."
					}
				]
			}
		]
	},
	{
		"last_name": "Ishmael",
		"first_name": "Odeen",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Amerindian Legends of Guyana",
				"summary": [""],
				"editions": [
					{
						"publisher": "Artex Publishing",
						"pub_info": "Wisconsin: Artex Publishing, 1995."
					}
				]
			}
		]
	},
	{
		"last_name": "Itwaru",
		"first_name": "Arnold",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Shattered Songs: A Journey from Somewhere to Somewhere (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Aya Press",
						"pub_info": "Toronto: Aya Press, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Sacred Presence",
				"summary": [""],
				"editions": [
					{
						"publisher": "Underwhich Editions",
						"pub_info": "[Toronto] Underwhich Editions, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Entombed Survivals",
				"summary": [""],
				"editions": [
					{
						"publisher": "Williams-Wallace Publishers",
						"pub_info": "Toronto: Williams-Wallace Publishers, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Shanti",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Peepal Tree Press, 1988."
					},
					{
						"publisher": "Coach House Press",
						"pub_info": "Toronto: Coach House Press [1990]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Critiques of Power",
				"summary": [""],
				"editions": [
					{
						"publisher": "Terebi",
						"pub_info": "Toronto: Terebi, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "The Invention of Canada: Literary Text and the Immigrant Imagination",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Body Rites: Beyond the Darkening (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "TSAR",
						"pub_info": "Toronto: TSAR, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Jack",
		"first_name": "Drisana",
		"birth_city": "",
		"birth_country": "St. Martin",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Drisana Deborah Jack is at the articulate edge of a small and exciting batch of St.Martiners who are, sometimes simultaneously, busy in literature, art, dance, song, and music, lighting and unprecedented crop of creative fires. Their energy become the essential fuel for the nation's cultural launch, or leap, into the twenty-first century. These cultural workers come at a time when they are urgently needed at home. Their vanguard is earning critical attention throughout the Caribbean and beyond from noted artists and institutions. When Drisana--also busy in art and theater--was granted a Fellow by the Caribbean Writers Institute, University of Miami (1996), she was already being called a leader and 'a most promising poet' among St. Martin's cultural brat pack in the Newsday and Guardian newspapers. Her recitals have been at functions ranging from a 'book party' for scholar George Lamming to a protest against the proposed 'Franco-Dutch' colonial treaty. Before graduating from Marist College (BA, 1993), she had been published in MC's Collection of Non-fiction Student Writings, listed in Who's Who of Students in American Colleges and Universities, and picked up the National Collegiate Communications Award. The Rainy Season (1997) is Drisana's first published volume of poems."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Rainy Season (Poems)",
				"summary": ["Here is a strong new voice which has come to join the chorus of inspired chanting of Caribbean women poets. - Lorna Goodison, University of Michigan-Ann Arbor"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1997. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Jack",
		"first_name": "Yvonne",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Cheers",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Tunapuna: Self-published, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Don't Push the Sister",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Tunapuna: Self-published, 1981."
					}
				]
			}
		]
	},
	{
		"last_name": "Jackman",
		"first_name": "Oliver",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Saw the House in Half",
				"summary": [""],
				"editions": [
					{
						"publisher": "Howard University Press",
						"pub_info": "Washington: Howard University Press, 1974."
					}
				]
			}
		]
	},
	{
		"last_name": "Jackson",
		"first_name": "Carl",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "East Wind in Paradise",
				"summary": [""],
				"editions": [
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Nor the Battle to the Strong",
				"summary": [""],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Jagan",
		"first_name": "Janet",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Army Intervention in the 1973 Elections in Guyana",
				"summary": [""],
				"editions": [
					{
						"publisher": "People's Progressive Party",
						"pub_info": "Georgetown: People's Progressive Party, [1973]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "An Examination of National Service",
				"summary": [""],
				"editions": [
					{
						"publisher": "People's Progressive Party",
						"pub_info": "Georgetown: People's Progressive Party, [1976]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "When Grandpa Cheddi Was a Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Patricia the Baby Manatee and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Peepal Tree",
						"pub_info": "Leeds: Peepal Tree, 1995."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Alexander MacG.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1920",
				"title": "The Cacique's Treasure and Other Tales",
				"summary": [""],
				"editions": [
					{
						"publisher": "The Gleaner Co.",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1920."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Cyril Lionel Robert (C.L.R.)",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1936",
				"title": "Minty Alley",
				"summary": [""],
				"editions": [
					{
						"publisher": "Secker and Warburg",
						"pub_info": "London: Secker and Warburg, 1936."
					},
					{
						"publisher": "New Beacon",
						"pub_info": "London: New Beacon, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1938",
				"title": "A History of Negro Revolt",
				"summary": [""],
				"editions": [
					{
						"publisher": "Fact",
						"pub_info": "London: Fact, 1938."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1938",
				"title": "The Black Jacobins: Toussaint L'Ouverture and the San Domingo Revolution",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "(1938)"
					},
					{
						"publisher": "Vintage",
						"pub_info": "New York: Vintage, 1963. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "World Revolution 1917-1936",
				"summary": [""],
				"editions": [
					{
						"publisher": "Kraus Reprint",
						"pub_info": "Nendeln: Kraus Reprint, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Mariners, Renegades and Castaways: The story of Herman Melville and the world we live in",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "New York, 1953."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Modern Politics: Being a series of lectures on the subject given at the Trinidad Public Library",
				"summary": [""],
				"editions": [
					{
						"publisher": "P.N.M. Publishing Co.",
						"pub_info": "Trinidad: P.N.M. Publishing Co., 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Beyond a Boundary",
				"summary": [""],
				"editions": [
					{
						"publisher": "Stanley Paul",
						"pub_info": "London: Stanley Paul & Co., 1963."
					},
					{
						"publisher": "Pantheon",
						"pub_info": "New York: Pantheon Books, 1983."
					},
					{
						"publisher": "Duke University Press",
						"pub_info": "Durham: Duke University Press, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Lenin, Trotsky and the Vanguard Party: A Contemporary View",
				"summary": [""],
				"editions": [
					{
						"publisher": "Facing Reality",
						"pub_info": "Detroit: Facing Reality, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Wilson Harris - A Philosphical Approach",
				"summary": [""],
				"editions": [
					{
						"publisher": "Facing Reality",
						"pub_info": "Detroit: Facing Reality, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Cricket",
				"summary": [""],
				"editions": [
					{
						"publisher": "Allison & Busby",
						"pub_info": "London: Allison & Busby [1986]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Special Delivery: The Letters of C.L.R. James to Constance Webb, 1939-1948",
				"summary": [""],
				"editions": [
					{
						"publisher": "Blackwell Publishers",
						"pub_info": "Cambridge: Blackwell Publishers, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Gatty",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Natives in Transition: A Novel on Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Vantage",
						"pub_info": "New York: Vantage, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Kelvin Christopher",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Jumping Ship and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "Villard Books",
						"pub_info": "New York: Villard Books, 1992."
					},
					{
						"publisher": "Ballantine Books",
						"pub_info": "New York: Ballantine Books, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Secrets",
				"summary": [""],
				"editions": [
					{
						"publisher": "Villard Books",
						"pub_info": "New York: Villard Books, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "A Fling With A Demon Lover",
				"summary": [""],
				"editions": [
					{
						"publisher": "New York: HarperCollins",
						"pub_info": "HarperCollins, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Leroy M.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Rhythm of Coger Street",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Gasparillo: Self-published, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Cannibal Island",
				"summary": [""],
				"editions": [
					{
						"publisher": "Self-published",
						"pub_info": "Gasparillo: Self-published, 1983."
					}
				]
			}
		]
	},
	{
		"last_name": "James",
		"first_name": "Marlon",
		"birth_city": "",
		"birth_country": "Jamaica/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1970",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2005",
				"title": "John Crow's Devil ",
				"summary": ["The author's first novel — which was rejected 70 times before being accepted for publication — tells the story of a biblical struggle in a remote Jamaican village in 1957."],
				"editions": [
					{
						"publisher": "Akashic Books",
						"pub_info": "New York: Akashic Books, 2005."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2009",
				"title": "The Book of Night Women",
				"summary": ["The story follows Lilith, a young woman born into slavery, who challenges the boundaries of what is expected of her."],
				"editions": [
					{
						"publisher": "Riverhead Books",
						"pub_info": "New York: Riverhead Books, 2009."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2014",
				"title": "A Brief History of Seven Killings",
				"summary": ["The novel spans several decades and explores the attempted assassination of Bob Marley in Jamaica in 1976 and its aftermath through the crack wars in New York City in the 1980s and a changed Jamaica in the 1990s. The book was awarded the 2015 Man Booker Prize. This marked the first time that a Jamaican-born author has won the prize."],
				"editions": [
					{
						"publisher": "Oneworld Publisher",
						"pub_info": "London: Oneworld Publisher, 2014."
					}
				]
			}
		]
	},
	{
		"last_name": "Jin",
		"first_name": "Meiling",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Thieving Summer",
				"summary": [""],
				"editions": [
					{
						"publisher": "Hamish Hamilton",
						"pub_info": "London; Hamish Hamilton, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Song of the Boatwoman",
				"summary": [""],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Gifts From My Grandmother (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Sheba Feminist Publishers",
						"pub_info": "London: Sheba Feminist Publishers, ????."
					}
				]
			}
		]
	},
	{
		"last_name": "Johnson",
		"first_name": "Amryl",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Long Road to Nowhere",
				"summary": [""],
				"editions": [
					{
						"publisher": "Virago Press",
						"pub_info": "London: Virago Press, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Sequins For A Ragged Hem",
				"summary": [""],
				"editions": [
					{
						"publisher": "Virago Press",
						"pub_info": "London: Virago Press, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Jones",
		"first_name": "Evan",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Tales of the Caribbean - Witches and Duppies",
				"summary": [""],
				"editions": [
					{
						"publisher": "Irwin Publishing",
						"pub_info": "Concord, Ontario: Irwin Publishing, 1984."
					}
				]
			}
		]
	},
	{
		"last_name": "Joseph",
		"first_name": "Lynn",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Coconut Kind of Day (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lothrop Lee & Shepard Books",
						"pub_info": "New York: Lothrop Lee & Shepard Books, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "A Wave in Her Pocket - Stories from Trinidad & Tobago",
				"summary": [""],
				"editions": [
					{
						"publisher": "Clarion Books",
						"pub_info": "New York: Clarion Books, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "An Island Christmas",
				"summary": [""],
				"editions": [
					{
						"publisher": "Clarion Books",
						"pub_info": "New York: Clarion Books, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Jasmine's Parlour Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "Lothrop Lee & Shepard Books",
						"pub_info": "New York: Lothrop Lee & Shepard Books, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Mermaid’s Twin Sister: More Stories From Trinidad",
				"summary": [""],
				"editions": [
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "New York: Houghton Mifflin Co., 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Jump-Up Time: A Trinidad Carnival Story",
				"summary": [""],
				"editions": [
					{
						"publisher": "Houghton Mifflin",
						"pub_info": "New York: Houghton Mifflin Co., 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Fly, Bessie, Fly",
				"summary": [""],
				"editions": [
					{
						"publisher": "Simon & Schuster",
						"pub_info": "New York: Simon & Schuster, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "The Color of My Words",
				"summary": [""],
				"editions": [
					{
						"publisher": "HarperCollins Children's Books",
						"pub_info": "Scarborough, Ontario: HarperCollins Children's Books, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Josiah",
		"first_name": "Henry",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Tales of Makonaima's Children",
				"summary": [""],
				"editions": [
					{
						"publisher": "Roraima",
						"pub_info": "Guyana: Roraima, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Kamau",
		"first_name": "Kwadwo Agymah",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Flickering Shadows",
				"summary": [""],
				"editions": [
					{
						"publisher": "Coffee House Press",
						"pub_info": "Minneapolis: Coffee House Press, 1996."
					},
					{
						"publisher": "Henry Holt",
						"pub_info": "New York: Henry Holt, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Pictures of a Dying Man",
				"summary": [""],
				"editions": [
					{
						"publisher": "Coffee House Press",
						"pub_info": "Minneapolis: Coffee House Press, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Keens-Douglas",
		"first_name": "Paul",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "When Moon Shine",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Tim Tim",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Tell Me Again",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Is Town Say So!",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Port of Spain: Keensdee Productions Ltd., 1981]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Twice Upon A Time",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			}
		]
	},
	{
		"last_name": "Kellman",
		"first_name": "Anthony",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Coral Rooms",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds, Yorkshire: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Kempadoo",
		"first_name": "Oonya",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1956",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Oonya Kempadoo was born in England of Guyanese parents in 1966.  She was brought up in Guyana.  She has lived in Europe and various islands of the Caribbean. At the time Buxton Spice was published, she was living in Grenada."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Buxton Spice",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Phoenix House [1998]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Dutton, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Kempadoo",
		"first_name": "Peter Lauchmonen",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1926",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Peter Lauchmonen Kempadoo was born on a sugar estate in Guyana in 1926, in a community mainly of Indians whose foreparents had come from Madras. After leaving school he worked for a time in the sugar factory, then as a teacher and later as a reporter in Georgetown. He has returned frequently to Guyana where he did important work in the 1970s taping folk performances and documenting a people's culture which has now largely disappeared. He lived for some years in Barbados, and has worked in the Caribbean, Africa and Asia, carrying out rural development work among grass-roots communities, but has mainly been based in the UK where he first moved in 1953."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Guiana Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Crawley: New Literature (Publishing) Ltd., 1960."
					},
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Old Thom's Harvest",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Eyre and Spottiswoode, 1965."
					}
				]
			}
		]
	},
	{
		"last_name": "Khan",
		"first_name": "Ismith",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1925",
		"death_day": "",
		"death_month": "",
		"death_year": "2002",
		"bio": ["Ismith Khan was born in Trinidad in 1925. He grew up within a Muslim family, who came from the country to Port of Spain, strongly influenced by his grandfather, a Pathan from Northern India, who was a militant community leader who had been shot and wounded by the colonial authorities in their suppression of the San Fernando Hosay rebellion of 1884. Ismith Khan attended Queen’s Royal College in Port of Spain and later worked as a reporter on the Trinidad Guardian. He was a close Trinidad friend of Sam Selvon, who edited the literary page of this paper before he emigrated to the UK. Khan himself left Trinidad in the 1950s to study at Michigan State University and Johns Hopkins University. Ismith Khan lived in New York until his death in April 2002."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "The Jumbie Bird",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1961."
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1974."
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1985. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "The Obeah Man",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1964."
					},
					{
						"publisher": "",
						"pub_info": "Toronto: TSAR, 1995."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Crucifixion",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "A Day in the Country and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Khemraj",
		"first_name": "Harischandra",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Cosmic Dance",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Kincaid",
		"first_name": "Jamaica",
		"birth_city": "",
		"birth_country": "Antigua/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "At the Bottom of the River",
				"summary": ["A collection of ten short stories."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux, 1983."
					},
					{
						"publisher": "",
						"pub_info": "London: Picador International, 1983."
					},
					{
						"publisher": "",
						"pub_info": "New York: Aventura [1985]. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Plume, 1992. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Annie John",
				"summary": ["A sort novel about growing up in Antigua."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux [1985]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Plume, 1986. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Annie, Gwen, Lilly, Pam and Tulip",
				"summary": ["A short story by Kincaid with 9 illustrations by Eric Fischl. Originally published in a limited edition of 145 copies by the Whitney Museum of American Art in 1986."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Library Fellows of the Whitney Museum of American Art, 1986."
					},
					{
						"publisher": "",
						"pub_info": "New York: Knopf, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "A Small Place",
				"summary": ["The Antigua-born author writes of her people's view of their island and the tourists who visit it."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux [1988]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Plume, 1989. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Lucy",
				"summary": ["A teenage girl from Antigua comes to New York to work as an au pair."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux [1990]."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape [1991]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Plume, 1991. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Autobiography of My Mother",
				"summary": ["The story of a woman's life on the island of Dominica."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux [1996]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "My Brother",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1997]."
					}
				]
			}
		]
	},
	{
		"last_name": "King",
		"first_name": "Berry",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1913",
				"title": "The Promise of Years",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1913."
					}
				]
			}
		]
	},
	{
		"last_name": "Kirkpatrick",
		"first_name": "Oliver",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1941",
				"title": "Country Cousin",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1941."
					}
				]
			}
		]
	},
	{
		"last_name": "Kizerman",
		"first_name": "Rudolph",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Stand Up in the World",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Blackbird Books, 1969."
					}
				]
			}
		]
	},
	{
		"last_name": "Knight",
		"first_name": "Clyde",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "We Shall Not Die",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1983"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Woman, Hold Your Head and Cry",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 199?."
					}
				]
			}
		]
	},
	{
		"last_name": "La Fortune",
		"first_name": "Knolly",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Legend of T-Marie",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: privately printed, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Schoolmaster Remembers",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: privately printed, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Ladoo",
		"first_name": "Harold Sonny",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "1973",
		"bio": ["Harold Sonny Ladoo was born and brought up in Trinidad and Tobago. He emigrated to Canada where he first published No Pain Like This Body. He died in 1973."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "No Pain Like This Body",
				"summary": ["Set in a Hindu community in the eastern Caribbean, No Pain Like This Body describes in vivid, unsentimental prose the life of a poor rice-growing family. Their struggle to cope with illness, a drunken and unpredictable father, and the violence of the elements is set against a sharply drawn village community. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Anansi, 1972."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Yesterdays",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Anansi, 1974."
					}
				]
			}
		]
	},
	{
		"last_name": "Laferriere",
		"first_name": "Dany",
		"birth_city": "",
		"birth_country": "Haiti/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "How to Make Love to a Negro",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Coach House Press. 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Eroshima",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Coach House Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "An Aroma of Coffee",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Coach House Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Why Must A Black Writer Write About Sex",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Coach House Press, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "A Drifting Year",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Douglas & McIntyre, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Lamming",
		"first_name": "George",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1927",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["George Lamming was born on June 8, 1927, in Carrington Village, Barbados. He was educated at Roebuck Boys School and the prestigious Combemere High School. He received early encouragement from Frank Collymore, his teacher and mentor, and editor of the literary journal, BIM. Lamming left Barbados for Trinidad in 1946, and went to England in 1950. He made his home in London for some twenty-five years. During this time he published six novels and a highly influential collection of essays, The Pleasures of Exile (1960). Lamming now makes his home in Barbados where he remains actively involved in the cultural life of the Caribbean. Awards and honors include a Guggenheim, the Sommerset Maugham Award, a Canadian Council Fellowship, a British Commonwealth Foundation grant, and a honorary doctorate from the University of the West Indies and City University of New York."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "In The Castle of My Skin",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Michael Joseph, 1953."
					},
					{
						"publisher": "",
						"pub_info": "New York: McGraw-Hill [1953]."
					},
					{
						"publisher": "",
						"pub_info": "Michigan: University of Michigan Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "The Emigrants",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Michael Joseph, 1954."
					},
					{
						"publisher": "",
						"pub_info": "Michigan: University of Michigan Press, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Of Age and Innocence",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Michael Joseph, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Season of Adventure",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Michael Joseph, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Water With Berries",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port of Spain: Longman Caribbean, 1971."
					},
					{
						"publisher": "",
						"pub_info": "New York: Holt, Rinehart and Winston [1972]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Natives of My Person",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Holt, Rinehart and Winston [1972]."
					},
					{
						"publisher": "",
						"pub_info": "Michigan: University of Michigan Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Coming, Coming Home: Conversations II - Western Education and the Caribbean Intellectual",
				"summary": ["The Lamming monographs are themselves part of the current discourse which targets the historical, cultural and  scientific implications of the pan-hemispheric encounters that will continue to be of global importance well into the  twenty-first century. - Rex Nettleford, Pro Vice Chancellor, University of the West Indies"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1995."
					},
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Lewis",
		"first_name": "Enid",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Voices of Earth",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: privately printed, 1971."
					}
				]
			}
		]
	},
	{
		"last_name": "Lewis",
		"first_name": "Theresa",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Caribbean Folk Legends",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Stratford, Ontario: Williams-Wallace, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Lindo",
		"first_name": "Archie",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Bronze: Short stories, articles, a poem and a play",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Mandeville, Jamaica: College Press, 1944."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1945",
				"title": "My Heart was Singing: Poems and short stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Mandeville, Jamaica: College Press, 1945."
					}
				]
			}
		]
	},
	{
		"last_name": "Lockett",
		"first_name": "Mary F.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1902",
				"title": "Christopher",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Abbey Press, 1902."
					}
				]
			}
		]
	},
	{
		"last_name": "Long",
		"first_name": "Earl E.",
		"birth_city": "",
		"birth_country": "St. Lucia",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Consolation",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Harlow, Essex: Longman, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Lovelace",
		"first_name": "Earl",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1935",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "While Gods are Falling",
				"summary": ["Winner of the B.P. Independence Literary Award, a competition sponsored by the BP Companies in Trinidad to mark the first anniversary of independence."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Collins, 1965. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Chicago: Regnery, 1966. (Hardcover)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Schoolmaster",
				"summary": ["Earl Lovelace's second novel tells the story of an isolated rural community coming in touch with the wider world. The villages learn, only too cruelly, that 'progress' can mean the destruction of cherished values."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Collins, 1968. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Chicago: Regnery, 1968. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann [1979]. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1998. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Dragon Can't Dance",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London] Andre Deutsch [1979]. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Essex: Longman, 1979. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1998. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Persea, 1998. (Hardcover)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "The Wine of Astonishment",
				"summary": ["A powerful and moving chronicle of the different ways in which members of a small Trinidad & Tobagoian community, Bonasse, hold on to their identity as they find themselves caught up in change and corruption. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London. Andre Deutsch, 1982. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1983. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Aventura, [1984]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Jestina's Calypso (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "A Brief Conversion and Other Stories",
				"summary": ["Twelve stories collected here for the first time, including The Fire Eater's Journey, Those Heavy Cakes, and Joebell and America."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1988.(Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Salt",
				"summary": ["Winner of the Commonwealth Writers Prize for Best Novel. A novel which explores like none before it the intermingling of cultures that is the contemporary West Indian experience."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber [1996]. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber [1996]. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "[New York] Persea Books [1997]. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "[New York] Persea Books [1998]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Crawfie the Crapaud",
				"summary": ["A 'Read Awhile' story for young (Level 3) readers. Illustrated by Annabel Large."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Essex] Longman [1997]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2011",
				"title": "Is Just a Movie",
				"summary": ["Winner of 2012 OCM Bocas Prize for Caribbean Literature"],
				"editions": [
					{
						"publisher": "Faber & Faber",
						"pub_info": "London: Faber & Faber, January 2011."
					}
				]
			}
		]
	},
	{
		"last_name": "Lovell",
		"first_name": "Glenville",
		"birth_city": "",
		"birth_country": "Barbados/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1955",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Fire in the Canes",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[New York] Soho Press [1995]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Song of Night",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[New York] Soho Press [1998]."
					}
				]
			}
		]
	},
	{
		"last_name": "Maas",
		"first_name": "Sharon",
		"birth_city": "",
		"birth_country": "Guyana/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Of Marriageable Age",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: HarperCollins, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Peacocks Dancing",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: HarperCollins, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "MacDermot",
		"first_name": "Thomas H. (pseudonym Tom Redcam)",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1903",
				"title": "Becka's Buckra Baby",
				"summary": ["The earliest known work of West Indian prose fiction. (Kenneth Ramchand, The West Indian Novel and Its Background, page 3.)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Jamaica Times' Printery, 1903."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1909",
				"title": "One Brown Girl and -",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Jamaica Times Printery, 1909."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "Orange Valley and Other Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Pioneer Press, 1951."
					}
				]
			}
		]
	},
	{
		"last_name": "Mahabir",
		"first_name": "Dennis J.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Cutlass is not for Killing",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Vantage, 1971."
					}
				]
			}
		]
	},
	{
		"last_name": "Maharaj",
		"first_name": "Ashram B.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Indo-Trinidad & Tobagoian Folk Tales in the Oral Tradition",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Beucarro, Trinidad & Tobago: Indian Review Committee, 1990."
					}
				]
			}
		]
	},
	{
		"last_name": "Maharaj",
		"first_name": "Clement",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "1995",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Dispossessed",
				"summary": ["This first novel grew from the world of indentured sugar plantation workers. Arriving from India in 1917, their labor and the labor of future generations made their island rich but left them poor, far from home, and despised by native islanders. From the guaranteed work on the estates, the laborers were forced to move on, to survive in a hostile world not knowing where the next day's bread would come from. This is the story of their lives, their resilience and their ultimate survival. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "Maharaj",
		"first_name": "Rabindranath",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Writer and his Wife and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Mais",
		"first_name": "Roger",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1905",
		"death_day": "",
		"death_month": "",
		"death_year": "1955",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1945",
				"title": "And Most of All Man",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: City Printery, 1945."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1946",
				"title": "Face and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Universal Printery, 1946."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "The Hills Were Joyful Together",
				"summary": ["This novel, set in a yard which is a microcosm of Kingston slum life, sets out as Mais himself said to give &quot;a true picture of the real Jamaica and the dreadful condition of the working classes.&quot; It precedes the Rasta story of Brother Man. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1953."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "Brother Man",
				"summary": ["This is Roger Mais' second novel. It brings alive the dance and laughter of the poor struggling for existence in the slums of Jamaica. In particular it portrays the Rastafarian cult. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1954."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "Black Lightning",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1955."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Listen, The Wind and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Harlow, Essex: Longman, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Manley",
		"first_name": "Rachel",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Drumblair - Memories of a Jamican Childhood",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Knopf, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Maran",
		"first_name": "René",
		"birth_city": "",
		"birth_country": "Martinique/France",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Born in Martinique, Maran participated in the New Negro movement in the U.S. and later, through gatherings at his home in Paris, facilitated the birth of Negritude."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1921",
				"title": "Batouala: A True Black Novel",
				"summary": ["Originally published in French. 'Batouala', which gained the Goncourt Prize in 1921, is a genuine picture of negro life in the French Congo. If some passages here and there appear a little outspoken to English taste, they form nevertheless an integral part of this authentic portrayal of negro manners. [British publisher's note]. Set in the Oubangui-Chari region of French Equatorial Africa."],
				"editions": [
					{
						"publisher": "Editions Alb",
						"pub_info": "Michel: Editions Alb, 1921."
					},
					{
						"publisher": "Jonathan Cape",
						"pub_info": "London: Jonathan Cape, 1922."
					},
					{
						"publisher": "Thomas Seltzer",
						"pub_info": "New York: Thomas Seltzer, 1922."
					},
					{
						"publisher": "Limited Editions Club",
						"pub_info": "New York: Limited Editions Club, 1932."
					},
					{
						"publisher": "Black Orpheus Press",
						"pub_info": "Washington, DC: Black Orpheus Press, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Le livre du souvenir. poemes, (1909-1957)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Présence Africaine",
						"pub_info": "Paris: Présence Africaine, 1958."
					}
				]
			}
		]
	},
	{
		"last_name": "Markham",
		"first_name": "E. A. (Archie)",
		"birth_city": "",
		"birth_country": "Montserrat",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1939",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Born in the village of Harris, Montserrat, West Indies in 1939, E .A. (Archie) Markham's large, cultivated, extended family (theirs was, as his friend Howard Fergus describes, a 'near Great-House') continues to provide him with much material for his fiction and poetry. He began a classical education at Montserrat's only grammar school, but left the island in his youth to complete his education in Britain. Nevertheless, he has remained closely concerned with the fortunes of Monserrat, particularly after the devastating hurricane Hugo of 1989 and the volcanic eruption of a few years later that continues to threaten Montserrat's very existence as a society."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Cross Fire (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1972"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Mad (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1973"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Love Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1978"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Masterclass (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1979"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Games & Penalties (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1980"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Love, Politics & Food (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1982"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Family Matters (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1984"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Human Rites (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1984"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Something Unusual (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1986"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Lambchops in Papua New Guinea (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1986"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Living in Disguise (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1987"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Towards the End of a Century (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Anvil Press",
						"pub_info": "[London] Anvil Press [1989]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Maurice V.'s Dido (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1991"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Letters from Ulster & the Hugo Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1993"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Ten Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1994"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Misapprehensions (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1995"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Marking Time",
				"summary": ["In this campus novel about life and writing, factuality and invention rub shoulders to hilarious effect in the confessions of Pewter Stapleton, West Indian writer still full of memories of his native Montserrat, teaching in the North of England."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Fragments of Memory (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "2000"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Taking the Drawing Room Through Customs: Selected Stories 1972-2002",
				"summary": ["Whether writing stories of observant humour, occasional bleakness, audacious mythologising or absurdist magical realism, the crafted completeness of the stories in this collection reveal Markham as a master of the short story form."],
				"editions": [
					{
						"publisher": "Peepal Tree Press",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Marshall",
		"first_name": "Paule",
		"birth_city": "",
		"birth_country": "USA/Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Brown Girl, Brownstones",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Random House, 1959."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Soul Clap Hands and Sing",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Atheneum, 1961."
					},
					{
						"publisher": "",
						"pub_info": "London: W.H. Allen, 1962."
					},
					{
						"publisher": "",
						"pub_info": "Washington, DC: Howard University Press, 1988."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Chosen Place, the Timeless People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Harcourt, Brace & World, 1969."
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1970."
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage Contemporaries, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Praisesong for the Widow",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: G.P. Putnam's, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Reena and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1984"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Merle: A Novella and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Virago, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Daughters",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Atheneum, 1991."
					},
					{
						"publisher": "",
						"pub_info": "New York: Plume, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "Maxwell",
		"first_name": "Marina Ama Omowale",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Chopstix in Mauby",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "McCartney",
		"first_name": "Norma",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Tales of the Immortelles - (Caribbean Folk Tales)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Macmillan Press, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "McDonald",
		"first_name": "Ian",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Humming-Bird Tree",
				"summary": ["A novel of childhood set in Trinidad & Tobago. It will be of particular interest to the numerous enthusiasts of [Michael Anthony's] The Year in San Fernando. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1969"
					},
					{
						"publisher": "",
						"pub_info": "New York: Harcourt, Brace & Co, 1970."
					},
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Heinemann Book of Caribbean Poetry (Editor)",
				"summary": ["West Indians, as Ian McDonald comments, 'write poetry as well as they play cricket' and Heinemann's anthology is the most comprehensive and up-to-date selection of contemporary Caribbean poetry, including major names like Derek Walcott, John Agard, and Merle Collins, alongside new poets of the region. This collection is an invaluable academic selection and will provide a fine introduction for the general reader interested in the lyricism of Caribbean poetry. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "McKay",
		"first_name": "Claude",
		"birth_city": "",
		"birth_country": "Jamaica/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1890",
		"death_day": "",
		"death_month": "",
		"death_year": "1948",
		"bio": ["The first West Indian Negro novelist and the first to go into exile. (Kenneth Ramchand, The West Indian Novel and Its Background, page 14.)"],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1912",
				"title": "Songs of Jamaica (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1912"
					},
					{
						"publisher": "",
						"pub_info": "Miami: Mnemosyne Publishing, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1912",
				"title": "Songs from Jamaica (Music and lyrics)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Augener, 1912."
					},
					{
						"publisher": "",
						"pub_info": "Miami: Mnemosyne Publishing, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1920",
				"title": "Spring in New Hampshire and Other Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Grant Richard, 1920."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1922",
				"title": "Harlem Shadows (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Harcourt, Brace and Co., 1922."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1928",
				"title": "Home to Harlem",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York and London: Harper and Brothers, 1928."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1929",
				"title": "Banjo: A Story without a Plot",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York and London: Harper and Brothers, 1929."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1932",
				"title": "Gingertown",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York and London: Harper and Brothers, 1932."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1933",
				"title": "Banana Bottom",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York and London: Harper and Brothers, 1933."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1937",
				"title": "A Long Way From Home",
				"summary": ["An autobiographical account of the author's international travels and the literary luminaries he met along the way."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Lee Furman [1937]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1940",
				"title": "Harlem: New York Metropolis",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Dutton, 1940."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Selected Poems of Claude McKay",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Bookman Associates, 1953."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harcourt, Brace & World [nd]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Passion of Claude McKay: Selected Prose and Poetry, 1912-1948",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York : Schocken Books, 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "McKenzie",
		"first_name": "Alecia",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1960",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Satellite City (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Essex] Longman [1992]. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "McKenzie",
		"first_name": "Claude Winston",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Mudlander",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Greenwich Book Publishers, 1966."
					}
				]
			}
		]
	},
	{
		"last_name": "McKenzie",
		"first_name": "Earl",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1943",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "A Boy Named Ossie",
				"summary": ["This is a well crafted and entertaining collection of linked stories. Through the eyes of Ossie, the reader is given a wonderfully grounded and evocative sense of life in rural Jamaica; its humor, warmth and its ambitions, as well as its terrors and tribulations. The countryside and characters are beautifully observed and realized, and Earl McKenzie excels at convincing dialogue. Proverbs, rituals, and folklore are unobtrusively drawn upon to enhance the sense of a world intimately known. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Heinemann, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "McLellan",
		"first_name": "G.H.H.",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1943",
				"title": "Old Time Story",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Georgetown, British Guiana: The Daily Chronicle Printing Press, 1943."
					}
				]
			}
		]
	},
	{
		"last_name": "Melville",
		"first_name": "Pauline",
		"birth_city": "",
		"birth_country": "Guyana/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Shape-Shifter",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: The Women's Press, 1990."
					},
					{
						"publisher": "",
						"pub_info": "New York: Pantheon, 1990."
					},
					{
						"publisher": "",
						"pub_info": "London: Picador, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Ventriloquist's Tale",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bloomsbury [1997]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Bloomsbury, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "The Migration of Ghosts",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bloomsbury, 1998."
					}
				]
			}
		]
	},
	{
		"last_name": "Mendes",
		"first_name": "Alfred H.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1897",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1934",
				"title": "Pitch Lake",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Duckworth, 1934."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1935",
				"title": "Black Fauns",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Duckworth, 1935."
					}
				]
			}
		]
	},
	{
		"last_name": "Mittelholzer",
		"first_name": "Edgar",
		"birth_city": "",
		"birth_country": "Guyana/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1901",
		"death_day": "",
		"death_month": "",
		"death_year": "1965",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1941",
				"title": "Corentyne Thunder",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Eyre and Spottiswoode, 1941."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "A Morning at the Office",
				"summary": ["Published in the USA under the title A Morning in Trinidad."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hogarth Press, 1950."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "A Morning in Trinidad",
				"summary": ["USA publication of A Morning at the Office."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Garden City: Doubleday & Company, 1950."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "Shadows Move Among Them",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London/New York: Peter Nevill, 1951."
					},
					{
						"publisher": "",
						"pub_info": "Philadelphia: Lippincott, 1951."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Children of Kaywana",
				"summary": ["Reissued in 1960 under the title Savage Destiny."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Peter Nevill, 1952."
					},
					{
						"publisher": "",
						"pub_info": "New York: The John Day Company [1952]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "The Weather in Middenshot",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1952."
					},
					{
						"publisher": "",
						"pub_info": "New York: The John Day Company, 1953."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "The Life and Death of Sylvia",
				"summary": ["Reissued in paperback under the title Sylvia."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1953."
					},
					{
						"publisher": "",
						"pub_info": "New York: The John Day Company, 1954."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "The Adding Machine: A Fable for Capitalists and Commercialists",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1954."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "The Harrowing of Hubertus",
				"summary": ["Published in the USA under the title Hubertus. Reissued in 1959 under the title Kaywana Stock."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1954."
					},
					{
						"publisher": "",
						"pub_info": "London: NEL Books, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "Hubertus",
				"summary": ["USA publication of The Harrowing of Hubertus."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York, The John Day Company, 1955."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "My Bones and My Flute",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1955."
					},
					{
						"publisher": "",
						"pub_info": "London: Longman/Drumbeat, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "Of Trees and the Sea",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1956."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "A Tale of Three Places",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1957."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Kaywana Blood",
				"summary": ["Published in the USA under the title The Old Blood."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1958."
					},
					{
						"publisher": "",
						"pub_info": "London: Grafton Books, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Old Blood",
				"summary": ["USA publication of Kaywana Blood."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Garden City: Doubleday & Company, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "With a Carib Eye (Nonfiction)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker & Warburg, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Weather Family",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker & Warburg, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Kaywana Stock",
				"summary": ["Originally published in 1954 as The Harrowing of Hubertus."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1959."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "A Tinkling in the Twilight",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1959."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "The Mad MacMullochs",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Peter Owen, 1959."
					},
					{
						"publisher": "",
						"pub_info": "London: World Distributors [1961]. (Mass Market Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Sylvia",
				"summary": ["Originally published in 1953 as The Life and Death of Sylvia."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Dell, 1960. (Mass Market Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Latticed Echoes",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Eltonsbrody",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Savage Destiny",
				"summary": ["Originally published in 1952 as Children of Kaywana."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Dell, 1960. (Mass Market Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Thunder Returning",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker and Warburg, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "The Piling of Clouds",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Putnam, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "The Wounded and the Worried",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Putnam, 1962."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "A Swarthy Boy (Autobiography)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Putnam, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Uncle Paul",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Macdonald, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Aloneness of Mrs. Chatham",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Tandem Books, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Jilkington Drama",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London/New York/Toronto: Abelard-Schuman [1965]."
					}
				]
			}
		]
	},
	{
		"last_name": "Mohamed",
		"first_name": "Nazer",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The End is Not Yet",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-published. Curepe, 1985."
					}
				]
			}
		]
	},
	{
		"last_name": "Mohammed",
		"first_name": "Sharlow",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Requiem for a Village/Apartheid Love",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Inprint, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Elect",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Monar",
		"first_name": "Rooplall",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1945",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Rooplall Monar was born in a mud floor logie on the Lusignan sugar estate, East Coast Demerara, in 1945. His parents were both caneworkers, and his mother continued to work on her own ground provision plot daily, long after she retired. The family moved to Annandale Village in 1953 to a houselot with its own plot. This, much extended over the years, remains Monar's home."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Meanings (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1972"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Patterns (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1972"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Backdam People (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Koker (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Janjhat (Novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "High House and Radio (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Estate People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Guyana: Roraima, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Ramsingh Street",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "?"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Tormented Wives",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1999"
					}
				]
			}
		]
	},
	{
		"last_name": "Montague",
		"first_name": "Masani",
		"birth_city": "",
		"birth_country": "Jamaica/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Dread Culture: A Rastawoman's Story",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1995."
					}
				]
			}
		]
	},
	{
		"last_name": "Montano",
		"first_name": "Robin",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Counterpoint",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Paria, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Mootoo",
		"first_name": "Shani",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Out on Main Street and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Vancouver,B.C.: Press Gang Publishers, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Mordecai",
		"first_name": "Pamela",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Her True-True Name: An Anthology of Women's Writing from the Caribbean (Editor)",
				"summary": ["From memories of turn-of-the-century Dominica to the contemporary USA, Africa, and Britain, 31 women writers from throughout the Caribbean express the loss and the longing, the pride and passion of the Caribbean identity. Differences of language -- English, French, Spanish -- point to a common history of migration and imperialism. The precision of &quot;standard English&quot; and the poetry of creole embody the rich contradictions of that heritage. Rooted in African old-tradition, a modern self-defining consciousness insists on calling itself by its 'true-true name.' The selections, arranged by country, include the following writers: Guyana -- Beryl Gilroy, Grace Nichols, Janice Shinebourne. Belize -- Zee Edgell. Cuba -- Omega Aguero, Mirta Yanez. Jamaica -- Erna Brodber, Michelle Cliff, Christine Craig, Velma Pollard, Joan Riley, Olive Senior, Sylvia Wynter Carew. Haiti -- Marie Chauvet (Marie Vieux). Dominican Republic -- Hilma Contreras. Puerto Rico -- Rosario Ferre, Magali Garcia Ramis, Carmen Lugo Filippi, Ana Lydia Vega. Antigua -- Jamaica Kincaid. Guadeloupe -- Maryse Conde, Simone Schwarz-Bart, Myriam Warner-Vieyra. Dominica --Jean Rhys, Phyllis Shand Allfrey, Barbados -- Paule Marshall. Grenada -- Merle Collins. Trinidad and Tobago -- Dionne Brand, Rosa Guy, Marion Patrick-Jones, Merle Hodge."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Morris",
		"first_name": "John [pseudonym of John Hearn and Morris Cargill]",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Fever Grass",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London/Kingston] Collins and Sangster, 1969."
					},
					{
						"publisher": "",
						"pub_info": "New York: G.P. Putnam's Sons, 1969."
					},
					{
						"publisher": "",
						"pub_info": "New York: Berkley, 1971. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Candywine Development",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London/Kingston] Collins and Sangster, 1970."
					},
					{
						"publisher": "",
						"pub_info": "Secaucus. N.J.: Citadel Press [1971]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Dell, 1974. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Checkerboard Caper",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Secaucus. N.J.: Citadel Press [1975]."
					}
				]
			}
		]
	},
	{
		"last_name": "Morrow",
		"first_name": "Bradford",
		"birth_city": "",
		"birth_country": "USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Archipelago: New Caribbean Writing (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Annandale-on-Hudson, NY: Conjunctions/Bard College, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Munroe",
		"first_name": "Andrew Adrian",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Caribbean Stories - Supernatural Tales of Guyana",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New Jersey: Golden Grove Pub., 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Naipaul",
		"first_name": "Seepersad",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1943",
				"title": "Gurudeva and Other Indian Tales",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: Privately printed, 1943."
					},
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1976."
					}
				]
			}
		]
	},
	{
		"last_name": "Naipaul",
		"first_name": "Shiva",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Fireflies",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Chip-Chip Gatherers",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Love and Death in a Hot Country",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Viking, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "North of South",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hamish Hamilton, 1983."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Beyond the Dragon's Mouth: Stories and Pieces",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1984"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "An Unfinished Journey",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hamish Hamilton, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Naipaul",
		"first_name": "V.S.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1932",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "The Mystic Masseur",
				"summary": ["This is the story of Ganesh Ramsumair's success: of how, if he had not been so unappreciated as a teacher he would never become a masseur; of how, if he had not lacked talent as an ordinary masseur he would never have blossomed into a mystic one. Such a topsy-turvy success story could only have taken place in Trinidad & Tobago. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1957."
					},
					{
						"publisher": "",
						"pub_info": "London: Hinemann, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Suffrage of Elvira",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1958."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Miguel Street",
				"summary": ["The author's first book, but third published. A collection of stories."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1959."
					},
					{
						"publisher": "",
						"pub_info": "London: Hinemann, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "A House for Mr. Biswas",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Mr. Stone and the Knights Companion",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Mimic Men",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "A Flag on the Island",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Loss of El Dorado",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1969"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "In a Free State",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Guerrillas",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "A Bend in the River",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Enigma of Arrival",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "A Way in the World",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Vintage Books, 1995."
					}
				]
			}
		]
	},
	{
		"last_name": "Narain",
		"first_name": "Harry",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Grass-Root People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Cuba: Casa de las Americas, 1981."
					}
				]
			}
		]
	},
	{
		"last_name": "Narine",
		"first_name": "Harricharan",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Days Gone By",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Self-published. Mayaro. 1975."
					}
				]
			}
		]
	},
	{
		"last_name": "Nichols",
		"first_name": "Grace",
		"birth_city": "",
		"birth_country": "Guyana/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Whole of a Morning Sky",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: ViragoPress, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Nicole",
		"first_name": "Christopher",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "Off-White",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1959."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Shadows in the Jungle",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "Ratoon",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1962."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Dark Noon",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Amyot's Cay",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Blood Amyot",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Amyot Crime",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "King Creole [Peter Grange]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "The Eliminator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "White Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Co-ordinator [Peter Grange]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Devil's Emissary [Peter Grange]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Predator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Self-Lovers",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Deviator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Doom Fishermen [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Thunder and the Shouting",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Manhunt for a General [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Longest Pleasure",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Tumult at the Gate [Peter Grange]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Face of Evil",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Infiltrator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Where the Cavern Ends [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Appointment in Kiltone [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "The Expurgator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Captivator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "The Golden Goddess [Peter Grange]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jarrolds, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Lord of the Golden Fan",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Caribee",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1974."
					},
					{
						"publisher": "",
						"pub_info": "New York: Signet, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "The Fear Dealers [Robin Cade]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "Dark Passage [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Doubleday, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Devil's Own",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Fascinator [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Tricolour: A Novel of the French Revolution.[Mark Logan]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: St. Martin's Press, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Black Dawn",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Heroes",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Severn House, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "Tallant for Trouble [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Sunset",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Cassell, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Tallant for Disaster [Andrew York]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Doubleday, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Noel",
		"first_name": "Victor",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "The Four-Two Precinct",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Vantage, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Nunez-Harrell",
		"first_name": "Elizabeth",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "When Rocks Dance",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Ballantine Books, 1986."
					}
				]
			}
		]
	},
	{
		"last_name": "Ogilvie",
		"first_name": "William G.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "Cactus Village",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1953."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1953",
				"title": "The Ghost Bank",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1953."
					}
				]
			}
		]
	},
	{
		"last_name": "Osborne",
		"first_name": "Ivor",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1977",
				"title": "The Mercenary",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Rex Collings, 1977."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Mango Season",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Rex Collings, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Palmer",
		"first_name": "C. Everard",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "A Broken Vessel",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "The Adventures of Jimmy Maxwell (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Jamaica: Ministry of Education, 1962."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "A Taste of Danger (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Jamaica: Ministry of Education, 1963."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "The Cloud with the Silver Lining",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Big Doc Bitteroot",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Sun Salutes You",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Hummingbird People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "A Cow Called Boy",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis: Bobbs-Merrill, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Baba and Mr. Big",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis: Bobbs-Merrill, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "The Wooing of Beppo Tate",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "My Father Sun-Sun Johnson",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "A Dog Called Houdini",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Palmer",
		"first_name": "Hazelle",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Tales from The Gardens and Beyond",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "...But Where Are You Really From?",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1997."
					}
				]
			}
		]
	},
	{
		"last_name": "Paravisini-Gebert",
		"first_name": "Lizabeth",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Green Cane and Juicy Flotsam: Short Stories by Caribbean Women (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New Jersey: Rutgers University Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Pleasure in the Word: Erotic Writings by Latin American Women (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "White Pine Press",
						"pub_info": "Fredonia, New York: White Pine Press, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Remaking A Lost Harmony - Stories from the Hispanic Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "White Pine Press",
						"pub_info": "Fredonia, New York: White Pine Press, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Sacred Possessions Vodou, Santeria, Obeah, and the Caribbean (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Rutgers University Press",
						"pub_info": "New Brunswick: Rutgers University Press, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Healing Cultures: Art and Religion as Curative Practices in the Caribbean and Its Diaspora (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Palgrave",
						"pub_info": "New York: Palgrave, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Patrick-Jones",
		"first_name": "Marion",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Pan Beat",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Columbus Publishers, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "J'Ouvert Morning",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Columbus Publishers, 1976."
					}
				]
			}
		]
	},
	{
		"last_name": "Patterson",
		"first_name": "Orlando",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "The Children of Sisyphus",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: New Authors Ltd., 1964."
					},
					{
						"publisher": "",
						"pub_info": "Boston: Houghton Mifflin, 1965."
					},
					{
						"publisher": "",
						"pub_info": "Essex: Longman Trade/Caroline House, 1987. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "An Absence of Ruins",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Sociology of Slavery",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Associated University, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Die The Long Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Morrow, 1971."
					},
					{
						"publisher": "",
						"pub_info": "Curtis, ????. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Freedom. Volume I: Freedom in the Making of Western Culture",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Basic Books, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Persaud",
		"first_name": "Lakshmi",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Butterfly in the Wind",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Sastra",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Persaud",
		"first_name": "Sasenarine",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Demerary Telepathy (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Between the Dash and the Comma (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "The Author, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Dear Death (Novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1989."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Ghost of Bellows Man (Novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "A Surf of Sparrows' Songs : A Poemanjali",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Tsar Publications, 1997."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "Canada Geese and Apple Chatney (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: TSAR, 1998."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "The Wintering Kundalini (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Philbert",
		"first_name": "Garnet",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1974",
				"title": "The Unfortunate Hero",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Privately printed, 1974."
					}
				]
			}
		]
	},
	{
		"last_name": "Philip",
		"first_name": "Marlene Nourbese",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Salmon Courage",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Wacaro Productions, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Harriet's Daughter",
				"summary": ["A beautifully written and paced story, sure to capture the imagination of both teenagers and adult readers. Set in Toronto, two girls, Margaret -- a second generation West Indian immigrant -- and Sulma -- fresh up from a joyous life with her grandmother in Tobago to a tense and unhappy relationship with her mother and stepfather -- become friends and comrades in various adventures."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: The Women's Press, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Phillips",
		"first_name": "Caryl",
		"birth_city": "",
		"birth_country": "St. Kitts/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "Strange Fruit (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Derbyshire] Amber Lane Press [1981]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Where There is Darkness (Play)",
				"summary": ["Where There is Darkness examines the plight of a West Indian man, Albert Williams, on the eve of his return to the Caribbean after an absence of 25 years. After a farewell party at his house he faces the reality of what his time in Britain has meant to him, his family and friends. (From the back cover of the first edition)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Derbyshire] Amber Lane Press [1982]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "The Shelter (Play)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Derbyshire] Amber Lane Press [1984]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Final Passage",
				"summary": ["The author's first novel."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber [1985]. (Simultaneously in hardcover and trade paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "A State of Independence",
				"summary": ["The author's second novel. A personal favorite."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1986."
					},
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux, 1986."
					},
					{
						"publisher": "",
						"pub_info": "New York: Macmillan [1988]. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The European Tribe",
				"summary": ["The author's first full-length work of nonfiction. 'The European Tribe' is the global community of whites who have forced their languages, cultures, and history on their non-white neighbors."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar Straus Giroux [1987]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Playing Away (Teleplay)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Higher Ground",
				"summary": ["The author's third novel."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Viking, 1989."
					},
					{
						"publisher": "",
						"pub_info": "New York: Viking, 1989."
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage Books, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Cambridge",
				"summary": ["The author's fourth novel."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bloomsbury, 1991."
					},
					{
						"publisher": "",
						"pub_info": "New York: Alfred A. Knopf, 1992."
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Crossing The River",
				"summary": ["The author's fifth novel. Shortlisted for the 1993 Booker Prize."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bloomsbury, 1993."
					},
					{
						"publisher": "",
						"pub_info": "New York: Alfred A. Knopf, 1994."
					},
					{
						"publisher": "",
						"pub_info": "Toronto: Knopf Canada, 1994."
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage, 1995. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Nature of Blood",
				"summary": ["The author's sixth novel."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber [1997]. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York, Alfred A. Knopf, 1997. (Hardcover)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Extravagant Strangers: A Literature of Belonging (Editor)",
				"summary": ["An anthology of pieces by British writers who were born beyond Britain's shores."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber [1997]. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage Books, 1999. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "The Right Set (Editor)",
				"summary": ["An anthology of 65 great writings on tennis, with an Introduction by Phillips."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London] Faber and Faber [1999]. (Trade paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Vintage Books, 1999. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "The Atlantic Sound",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London] Faber and Faber [2000]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Alfred A. Knopf, 2000."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "A New World Order (Essays)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker & Warburg [2001]."
					},
					{
						"publisher": "",
						"pub_info": "New York: Alfred A. Knopf, 2002. (Trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2003",
				"title": "A Distant Shore",
				"summary": ["The author's seventh novel."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Secker & Warburg [2003]."
					}
				]
			}
		]
	},
	{
		"last_name": "Pollard",
		"first_name": "Velma",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Considering Woman",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: The Women's Press, 1990. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Karl and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Essex: Longman, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Home Stretch",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Essex: Longman Trade/Caroline House, 1994. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Anansesem (Anthology)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Jamaica: Carlong Publishers, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Dread Talk: The Language of Rastafari",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "?",
				"title": "Shame Trees Don't Grow Here : But Poincianas Bloom",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "????"
					}
				]
			}
		]
	},
	{
		"last_name": "Porter",
		"first_name": "Frank",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Adventures of Boyzie Jones",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: Caribbean Book Distributors, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Powell",
		"first_name": "Patricia",
		"birth_city": "",
		"birth_country": "Jamaica/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Patricia Powell was born in Jamaica, emigrated to the U.S. in 1982 and is now an Assistant Professor of Creative Writing at the University of Massachusetts."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Diddle Diddle Red Hot Fiddle",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Radient Publishing Co., 1990. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Me Dying Trial",
				"summary": ["Set first in rural Jamaica and later in North America, the story spans twenty years in the lives of three generations of Jamaican women. Me Dying Trial chronicles the three women's disappointments, bravery, strength, and desires as they pursue the American dream. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1993. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "A Small Gathering of Bones",
				"summary": ["Dale's passionate relationship with Nevin is foundering. Hope and despair, jealousy and yearning, battle within him as he seeks to confront the antagonism of family, church, and society toward his homosexuality. All the while, a mysterious illness is threatening the gay community of late 1970s Jamaica and when Dale's friends succumb to it, his own isolation increases, pushing him toward desperate action. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1994. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Prince",
		"first_name": "Althea",
		"birth_city": "",
		"birth_country": "Antigua/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "How The East Pond Got Its Flowers",
				"summary": ["A children's book written under the name Althea Trotman."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "How The Star Fish Got to the Sea",
				"summary": ["A children's book written under the name Althea Trotman."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Ladies of the Night and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Quayle",
		"first_name": "Ada",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "The Mistress",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1957."
					}
				]
			}
		]
	},
	{
		"last_name": "Ramkeesoon",
		"first_name": "Peter",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Sunday Morning Coming Down",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Scope Publishing, 1975."
					},
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: L.A Toby and Scope, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Ramon Ffortune",
		"first_name": "Barnabas",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Undertones of Victory",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port-of-Spain: Inprint, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Redcam",
		"first_name": "Tom (pseudonym of Thomas H. MacDermot)",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1903",
				"title": "Becka's Buckra Baby",
				"summary": ["The earliest known work of West Indian prose fiction. (Kenneth Ramchand, The West Indian Novel and Its Background, page 3.)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Jamaica Times' Printery, 1903."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1909",
				"title": "One Brown Girl and -",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Jamaica Times' Printery, 1909."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "Orange Valley and Other Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Pioneer Press, 1951."
					}
				]
			}
		]
	},
	{
		"last_name": "Reid",
		"first_name": "Victor Stafford",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1913",
		"death_day": "",
		"death_month": "",
		"death_year": "1987",
		"bio": ["Victor Stafford Reid was born in Kingston, Jamaica on May 1, 1913. He has a secondary and commercial education in Jamaica. He has published numerous short stories in West Indian magazines.  In 1980, Reid was awarded the Order of Jamaica and in 1981 he gained the prestigious Norman Manley Award for Excellence in Literature. His international awards number among them Guggenheim and Canada Council Fellowships. He has worked on The Daily Gleaner in Kingston and for The Toronto Star."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1949",
				"title": "New Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "Knopf",
						"pub_info": "New York: Knopf, 1949."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1950."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1973. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "The Leopard",
				"summary": ["The renowned Jamaican storyteller sets this exciting novel in Kenya's Mau Mau revolution."],
				"editions": [
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1958."
					},
					{
						"publisher": "Viking",
						"pub_info": "New York: Viking, 1958"
					},
					{
						"publisher": "Collier Books",
						"pub_info": "New York: Collier Books, 1971"
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Sixty-five (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "Longman",
						"pub_info": "London: Longman, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "The Young Warriors",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1967"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Peter of Mount Ephraim",
				"summary": [""],
				"editions": [
					{
						"publisher": "Jamaica Publishing House",
						"pub_info": "Kingston: Jamaica Publishing House, 1971."
					},
					{
						"publisher": "Jamaica Publishing House",
						"pub_info": "Kingston: Jamaica Publishing House, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "The Jamaicans",
				"summary": [""],
				"editions": [
					{
						"publisher": "Institute of Jamaica",
						"pub_info": "Kingston: Institute of Jamaica, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Nanny Town",
				"summary": [""],
				"editions": [
					{
						"publisher": "Jamaica Publishing House",
						"pub_info": "[Kingston] Jamaica Publishing House [1983]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Horses of the Morning",
				"summary": ["Biography of Norman Manley, President of Jamaica 1959-1962."],
				"editions": [
					{
						"publisher": "Caribean Authors Publishing",
						"pub_info": "Caribean Authors Publishing, 1985."
					}
				]
			}
		]
	},
	{
		"last_name": "Rhys",
		"first_name": "Jean",
		"birth_city": "",
		"birth_country": "Dominica ",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1894",
		"death_day": "",
		"death_month": "",
		"death_year": "1979",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1927",
				"title": "The Left Bank and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1927."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper, 1927."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1928",
				"title": "Postures",
				"summary": ["Later reissued under the title Quartet."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Chatto and Windus, 1928."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1929",
				"title": "Quartet",
				"summary": ["Originally published in 1928 under the title Postures."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Simon and Shuster, 1929."
					},
					{
						"publisher": "",
						"pub_info": "Harmondsworth: Penguin, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1931",
				"title": "After Leaving Mr. Mackenzie",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1931."
					},
					{
						"publisher": "",
						"pub_info": "New York: Knopf, 1931."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1934",
				"title": "Voyage in the Dark",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Constable, 1934."
					},
					{
						"publisher": "",
						"pub_info": "New York: Morrow, 1935."
					},
					{
						"publisher": "",
						"pub_info": "Harmondsworth: Penguin, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1939",
				"title": "Good Morning, Midnight",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Constable, 1939."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1970."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Wide Sargasso Sea",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Norton, 1966."
					},
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1966."
					},
					{
						"publisher": "",
						"pub_info": "Harmondsworth: Penguin, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Tigers are Better Looking",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1968."
					},
					{
						"publisher": "",
						"pub_info": "Harmondsworth: Penguin, 1973."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1974."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "My Day: Three Pieces",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Frank Hallman, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Sleep It Off, Lady",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1976."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1976."
					},
					{
						"publisher": "",
						"pub_info": "Harmondsworth: Penguin, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Smile, Please: An Unfinished Autobiography",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Deutsch, 1979."
					},
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Jean Rhys Letters 1931-1966",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Deutsch, 1984."
					},
					{
						"publisher": "",
						"pub_info": "New York: Viking, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Jean Rhys: Tales of the Wide Caribbean",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Jean Rhys: The Collected Short Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New Yorn and London: W.W. Norton, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Richards",
		"first_name": "N.H.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "The Twilight Hour",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Vantage, 1971."
					}
				]
			}
		]
	},
	{
		"last_name": "Richmond",
		"first_name": "Angus",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "A Kind of Living",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Havana: Casa de las Americas, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "The Open Prison",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hansib, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Riley",
		"first_name": "Joan",
		"birth_city": "",
		"birth_country": "Jamaica/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "The Unbelonging",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: The Women's Press, 1985."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Waiting in the Twilight",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: The Women's Press, 1987."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Romance",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London] The Women's Press [1988]."
					}
				]
			}
		]
	},
	{
		"last_name": "Roberts",
		"first_name": "W. Adolphe",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1927",
				"title": "The Haunting Hand",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1927."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1929",
				"title": "The Mind Reader",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Macaulay Co., 1929."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1931",
				"title": "Mayor Harding of New York [Stephen Endicott]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Mohawk Press, 1931."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1931",
				"title": "The Moralist",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Mohawk Press, 1931."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1932",
				"title": "The Strange Career of Bishop Sterling: A Novel [Stephen Endicott]",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Meteor Press, 1932."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1935",
				"title": "The Top Floor Killer",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Nicholson and Watson, 1935."
					},
					{
						"publisher": "",
						"pub_info": "New York: A.M.S. Press, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1941",
				"title": "The Pomegranate",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis, New York: Bobbs-Merrill Co., 1941."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Royal Street",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis, New York: Bobbs-Merrill Co., 1944."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1946",
				"title": "Brave Mardi Gras",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis, New York: Bobbs-Merrill Co., 1946."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1948",
				"title": "Creole Dusk",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis, New York: Bobbs-Merrill Co., 1948."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1949",
				"title": "The Single Star",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Indianapolis, New York: Bobbs-Merrill Co., 1949."
					}
				]
			}
		]
	},
	{
		"last_name": "Rogers",
		"first_name": "De Wilton",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1947",
				"title": "Lalaja",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: Privately printed, 1947."
					},
					{
						"publisher": "",
						"pub_info": "San Juan: Privately printed, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Chalk Dust",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port of Spain: Privately printed, 1973."
					}
				]
			}
		]
	},
	{
		"last_name": "Rogers",
		"first_name": "Joel Augustas",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1917",
				"title": "From Superman to Man",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Chicago: A. Donohue and Co., Printers, 1917."
					}
				]
			}
		]
	},
	{
		"last_name": "Roumain",
		"first_name": "Jacques",
		"birth_city": "",
		"birth_country": "Haiti",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1944",
				"title": "Masters of the Dew",
				"summary": ["This outstanding Haitian novel tells of Manuel's struggle to keep his little community from starvation during drought. At the same time the story of his love for Annaise is told with great sensitiveness. A work of unusual freshness and beauty."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1944"
					},
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Ross",
		"first_name": "Leone",
		"birth_city": "",
		"birth_country": "Jamaica/England",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1969",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Leone Ross is a novelist, short story writer, and lecturer in fiction writing.  Her short stories have been widely anthologized.  She was born in England and grew up in and was educated in Jamaica. In 2000 Ross was a recipient of a London Arts Board Writers Award.  Recently she represented the British Council in Eastern Europe and Sweden.  She currently lectures in short story writing at the City Literary Institute in London, and will be a Fellow at Trinity College in Dublin, Ireland in 2001. Prior to publication, Ross worked as a journalist and editor for 14 years.  She held the post of Arts Editor at The Voice newspaper, Female Section Editor at The New Nation newspaper, and was transitional Editor for Pride magazine.  She also held the position of Deputy Editor at Sibyl, a feminist magazine. She has worked as a researcher at London Weekend Television and for the BBC."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "All the Blood is Red",
				"summary": ["Longlisted for the Orange Prize in 1997."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Angela Royal Publishing, 1996."
					},
					{
						"publisher": "",
						"pub_info": "Paris: Actes Sud, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Orange Laughter",
				"summary": ["'Ross has a powerful style, a taste for complex organization, and a strong imagination. Orange Laughter is a brilliant novel.'  --Bruce King, World Literature Today 'Not only a powerful story, this exceptionally fine novel is also a sophisticated examination of memory, madness, and the saving graces of the imagination.'  --Daily Telegraph"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Angela Royal Publishing, 1999."
					},
					{
						"publisher": "",
						"pub_info": "London: Anchor Press, 2000. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus & Giroux, 2000."
					},
					{
						"publisher": "",
						"pub_info": "New York: Picador, 2001. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "Paris: Actes Sud, 2001."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Whispers in the Walls: New Black and Asian Voices (Co-edited with Yvonne Brissett)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Birmingham, England: Tindal Street Press, 2001."
					}
				]
			}
		]
	},
	{
		"last_name": "Roy",
		"first_name": "Namba",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1961",
				"title": "Black Albino",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: New Literature, 1961."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "No Black Sparrows",
				"summary": ["This posthumously published first novel is a compelling tale of Jamaica in the 1930s. The society and culture of the urban poor are depicted with vivid detail and insight through the 'Sparrows,' four impoverished orphan children who eke out a living as petty traders, and under constant threat from the police. (Heineman blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Heinemann, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Sadeek",
		"first_name": "Sheik",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Song of the Sugarcanes",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Guyana: Privately printed, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Malali Makers",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Guyana: Privately printed, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Salkey",
		"first_name": "Andrew",
		"birth_city": "",
		"birth_country": "Panama/Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1959",
				"title": "A Quality of Violence",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: New Authors Ltd., 1959."
					},
					{
						"publisher": "",
						"pub_info": "London: New Beacon Books, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "Escape to an Autumn Pavement",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1960",
				"title": "West Indian Stories (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber,1960."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Hurricane (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Oxford University Press, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Stories from the Caribbean (Editor)",
				"summary": ["Reissued in 1970 under the title Island Voices: Stories from the West Indies."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Elek Books [1965]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "Earthquake (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Oxford University Press, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "Drought (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Oxford University Press, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1966",
				"title": "The Shark Hunters (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Nelson, 1966."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1967",
				"title": "Riot (Children's novel)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Oxford University Press, 1967."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "The Late Emancipation of Jerry Stover",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1968."
					},
					{
						"publisher": "",
						"pub_info": "[Harlow, Essex] Longman [1982]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Jonah Simpson",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Oxford University Press, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Adventures of Cactus Kelly",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Island Voices: Stories from the Caribbean (Editor)",
				"summary": ["Originally published in 1965 under the title Stories from the West Indies."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Liveright [1970]. (Cloth & paper)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Havana Journal",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Harmondsworth] Pelican Books [1971]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Caribbean Prose (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Evans Brothers Ltd. 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Anancy's Score",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bogle-L'Ouverture, 1973."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Joey Tyson",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bogle-L'Ouverture, 1975."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Come Home, Malcolm Heartland",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Danny Jones",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bogle-L'Ouverture, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "The River that Disappeared",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Bogle-L'Ouverture, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Away (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Allison & Busby [1980]."
					}
				]
			}
		]
	},
	{
		"last_name": "Schwarz-Bart",
		"first_name": "Simone",
		"birth_city": "",
		"birth_country": "Guadeloupe",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "The Bridge Beyond",
				"summary": ["In this novel Simone Schwarz-Bart shows the survival power of the women of Guadeloupe who live in conditions of extreme poverty and deprivation and yet who are filled with dauntless courage and love for life. The story is of the proud Lougandor women --Toussine the grandmother who, when luck deserts her, refuses to 'make a habit of sorrow' instilling in her grand-daughter, Telumee, the same principles of self reliance. For these two women happiness and suffering are different sides of the same coin. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Between Two Worlds",
				"summary": ["Simone Schwarz-Bart's tale intertwines the real and the magical, the history of the author's native Guadeloupe and the myths of the island. A monstrous beast has blocked out the sunlight and thrown Guadeloupe into eternal darkness. The beast is white domination and TiJean must destroy this evil. Through an exploration of contemporary Guadeloupe and a journey in the Africa of his ancestors, Simone Schwarz-Bart puts her hero to the test, but will he come through his voyage unscathed? (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1992."
					}
				]
			}
		]
	},
	{
		"last_name": "Scott",
		"first_name": "Lawrence",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Lawrence Scott is from Trinidad and Tobago, a Caribbean Creole. He now lives in London and divides his time between teaching and writing."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "Witchbroom",
				"summary": ["The last of an old colonial family, Lavren Monagas de los Macajuelos pours forth epic and intimate tales of conquest, crime, and passion. This extraordinary hermaphrodite character observes and acts in the unfolding drama of the new world, and we are drawn into the account of the quest for El Dorado begun by Columbus, the great navigator. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Allison and Busby, 1992."
					},
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Ballad for the New World and Other Stories",
				"summary": ["Tales of thwarted desires, repressed passions and betrayals evoke a troubled Caribbean paradise. The legacy of a cruel history haunts this new world society. Individuals are consumed by their own emotions and confused by the shifting ground of their own cultures. With a blend of pathos and ironic humor, Lawrence Scott describes life in this fallen Eden, where both the melancholy and the extravagant play their part. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Seaforth",
		"first_name": "Sybil",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Growing Up with Miss Milly",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Ithaca N.Y.: Calaloux Publications, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Sekou",
		"first_name": "Lasana M.",
		"birth_city": "",
		"birth_country": "St. Martin",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Lasana M. Sekou was born in Aruba to St.Martin parents and was reared in St.Martin. As founder of House of Nehesi Publishers, for which Sekou serves as projects director, he encourages and promotes young writers and has secured the publication of books by an unprecedented number of St.Martiners. Since 1986, House of Nehesi has published more books in and about St.Martin, and by St.Martin writers, than any similar period in the island's post-Colombian history. Sekou has helped to demystify the writing and publishing of books by St.Martiners in St.Martin. He continues personally and through House of Nehesi to encourage critical research, reading, and writing, particularly with regard to St.Martin/Caribbean oral and recorded history, culture, and the natural environment. Sekou has secured the publication of literary/scholarly books by writers from Saba, Curacao, Barbados, Tortola, and the USA. Sekou has recited at the prestigious University of The West Indies Caribbean Writers Series, and for other universities, international festivals, and organizations throughout the Caribbean, USA, England, Germany, The Netherlands, and Korea. Scholars/writers Kamau Brathwaite (UWI/New York University), Dr. Howard Fergus (Montserrat), Dr. Joseph Pereira (UWI/Jamaica), Wim Rutgers (Aruba), Daniella Jeffry (St.Martin), Fabian Badejo (St.Martin) are among those who consider Sekou to be one of the most prolific new generation Caribbean poets. According to Dr. Fergus, Sekou's writings and his work at House of Nehesi are serving not only to bring St.Martin's culture to the region and the world but also to let the world know that there are serious literary activities going on in the eastern Caribbean. Sekou's poetry and reviews of his writings have appeared in Callaloo, Discover St. Martin-St.Maarten, The Caribbean Writer, Del Caribe (Cuba), The Massachusetts Review (USA), De Gids (The Netherlands), Revue Noir (France), and other national, regional and international journals and magazines. Sekou's articles on history, culture, and politics appear regularly in St.Martin's Newsday (which he edited 1984-1997). In 1994, Lasana M. Sekou was awarded the James Michener Fellow from the University of Miami's Caribbean Writers Institute."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Moods for Isis - Picturepoems of Love & Struggle (Poems)",
				"summary": ["The variety and quantity of his insight will motivate and stir the soul/mind of his readers to intense passion....as they attempt to absorb his multi-level poetic message. - Linda Taylor"],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1978"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "For the Mighty Gods - An Offering (Poems)",
				"summary": ["The main feeling flashing through the book is of a conscious young Black man; conscious of the ugliness and beauty of this world. It is clear he understands the tied up beauties of black life... That our struggles are righteous. That we will win. That our women are Black beauties packed full of the sweetness of love desired and expressed. - Amiri Baraka"],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1982"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Images in the Yard (Poems)",
				"summary": ["The aim ... is not to romanticize the past nor detract from present hardships, but to awaken 'the people' to the true consciousness of our predicament, to give us an awareness of recognition, and to forge a dignified sense of identity for Balck people all over the universe... Lasana's message is crucial to the survival of 'Them Freedom Fighters'... - Musa W. Ibrahim"],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1983"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Maroon Lives - For Grenadian Freedom Fighters (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1983"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Born Here (Poems)",
				"summary": ["Born Here should be considered the first true poetic baptism of Lasana Sekou in the still sedated waters of his native island on which more than 300 years of French and Dutch colonial rule has had a numbing lethargic effect. - Fabian A. Badejo"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1986. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Nativity & Monologues For Today",
				"summary": [""],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1988. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Love Songs Make You Cry (Stories)",
				"summary": ["With the publication of this collection of short stories, Lasana M. Sekou, whose work in verse has been receiving a deserved regional recognition, has accepted the challenge of prose fiction. - Dr. Linda Badejo-Richardson"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1989. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "The Independence Papers: Readings on a New Political Status for St.Maarten/St. Martin (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1990"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Mothernation - Poems from 1984 to 1987",
				"summary": ["The poems of Mothernation covers a period when it is not yet opportune to speak one's mind publicly without fear of political repercussion. ... (Sekou's) cry for freedom is creative and shocking for his audience. But no one can remain indifferent toward that fascinating voice. - Armando Lampe, Ph.D., Catholic Priest"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1991. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Quimbé - The Poetics of Sound",
				"summary": [""],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1991. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "National Symbols of St.Martin - A Primer (Editor)",
				"summary": ["A first and fascinating labor of love and scholarship highlighting, in text, and illustrations, St.Martin's people, history, culture and natural environment. Extensive bibliography."],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1996."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "Brotherhood of the Spurs (Stories)",
				"summary": ["Brotherhood of the Spurs brings a new dimension to the growing stature of Lasana M. Sekou as a St.Martin and  Caribbean writer. - George Lamming"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 1997. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Big Up St. Martin - Essay & Poem",
				"summary": [""],
				"editions": [
					{
						"publisher": "?",
						"pub_info": "1999"
					}
				]
			}
		]
	},
	{
		"last_name": "Selvon",
		"first_name": "Samuel",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1924",
		"death_day": "",
		"death_month": "",
		"death_year": "1994",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "A Brighter Sun",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Allan Wingate, 1952. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: Viking, 1953. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1979. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1955",
				"title": "An Island is a World",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Allan Wingate, 1955. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Toronto: TSAR, 1993."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1956",
				"title": "The Lonely Londoners",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Allan Wingate, 1956. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: St. Martin's Press, 1956. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Mayflower, 1966. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1972. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1979. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "Toronto: TSAR, 1991. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1957",
				"title": "Ways of Sunlight",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1957. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: St. Martin's Press, 1957. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Longman Caribbean, 1973. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Longman, 1979. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1958",
				"title": "Turn Again Tiger",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1958. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: St. Martin's Press, 1959. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Four Square, 1962. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1979. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "I Hear Thunder",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1963. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "New York: St. Martin's Press, 1963. (Hardcover)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Housing Lark",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1965. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "[Washington, DC] Three Continents Press [1990]. (Hardcover and trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "A Drink of Water",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Nelson, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Plains of Caroni",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: MacGibbon and Kee, 1970. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "[Toronto] Williams-Wallace Publishers [1985]. (Hardcover and trade paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Those Who Eat the Cascadura",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Davis-Poynter, 1972. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "Toronto: TSAR, 1990."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Moses Ascending",
				"summary": ["The second of Selvon's novels about West Indians in Britain, this is the entertaining sequel to The Lonely Londoners. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Davis-Poynter, 1975. (Hardcover)"
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1984. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "Moses Migrating",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Longman, 1983."
					},
					{
						"publisher": "",
						"pub_info": "Essex: Longman Drumbeat, 1983. (Paperback)"
					},
					{
						"publisher": "",
						"pub_info": "[Washington, DC] Three Continents Press [1992]. (Hardcover and trade paperback) Includes a new preface by the author."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Eldorado West One (Plays)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1988. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Foreday Morning: Selected Prose (1946-1986)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Essex] Longman [1989]. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Highway in the Sun (Plays)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Leeds]= Peepal Tree Press [1991]. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Senior",
		"first_name": "Olive",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "The Message is Change (Non-fiction)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "1972"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Pop Story Gi Mi: The Queen of Kingston and Other People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Ministry of Education, 1978."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1983",
				"title": "A-Z of Jamaican Heritage (Non-fiction)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Kingston] Heinemann Educational Books/The Gleaner Company [1983]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1985",
				"title": "Talking of Trees (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Kingston: Calabash, 1985]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Summer Lightning and Other Stories",
				"summary": ["Winner of the 1987 Commonwealth Writers Prize"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Essex: Longman, 1986]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Arrival of the Snake-Woman and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Essex] Longman [1989]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Working Miracles: Women's Lives in the English-Speaking Carribean (Non-fiction)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London/Bloomington: James Currey/Indiana University Press [1991]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Gardening in the Tropics (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: McClelland & Stewart, 1994."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1995",
				"title": "Discerner of Hearts (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Toronto: McClelland & Stewart, 1995.]"
					}
				]
			}
		]
	},
	{
		"last_name": "Shewcharan",
		"first_name": "Narmala",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Tomorrow is Another Day",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Shinebourne",
		"first_name": "Janice",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Timepiece",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "The Last English Plantation",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds: Peepal Tree Press, 1988."
					}
				]
			}
		]
	},
	{
		"last_name": "Silvera",
		"first_name": "Makeda",
		"birth_city": "",
		"birth_country": "Jamaica/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1988",
				"title": "Sight Specific: Lesbians & Representation (Contributor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[Toronto: A. Space, 1988]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Remembering G and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Her Head a Village and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Vancouver: Press Gang Publishers, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Simpson",
		"first_name": "Louis",
		"birth_city": "",
		"birth_country": "Jamaica/USA",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Air With Armed Men",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Magazine Editions, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "North of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Harper and Row, 1972."
					}
				]
			}
		]
	},
	{
		"last_name": "Singh",
		"first_name": "Kit Puran",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1982",
				"title": "Saraswatee: A Novel of India",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Seattle: Madrona Publishers, 1982."
					}
				]
			}
		]
	},
	{
		"last_name": "Sirju",
		"first_name": "Mohan",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "So Let It Be",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Dovann Publishing Company, 1972."
					}
				]
			}
		]
	},
	{
		"last_name": "Smith",
		"first_name": "Horane",
		"birth_city": "",
		"birth_country": "Jamaica/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "Lover's Leap",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London, 1999."
					}
				]
			}
		]
	},
	{
		"last_name": "Snod",
		"first_name": "E. [E.A. Dodd]",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1905",
				"title": "Maroon Medicine",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Jamaica Times' Printery, 1905."
					}
				]
			}
		]
	},
	{
		"last_name": "Spence",
		"first_name": "Vanessa",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Vanessa Spence was born in Kingston, Jamaica, and was educated at the Universities of Oxford and Yale. She lives in the Blue Mountains."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Roads are Down",
				"summary": ["This is a deceptively simple tale of the hazardous and uncharted battle zones between gender, culture, and race. Spence tells the story of a young Jamaican woman who by accident meets an aging American and his wife. A friendship forms between Katherine and the American, and this relationship ultimately leads to Katherine's acquiring her longed-for house in the remote hills above Kingston that she so loves. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Oxford: Heinemann, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "St. Omer",
		"first_name": "Garth",
		"birth_city": "",
		"birth_country": "St. Lucia",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "A Room on the Hill",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1968",
				"title": "Shades of Grey",
				"summary": ["Collects two short novels: The Lights on the Hill and Another Place Another Time."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1968."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "Nor Any Country",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "J-, Black Bam and the Masqueraders",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Faber and Faber, 1972."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "The Lights on the Hill",
				"summary": ["First separate edition.  Originally published in Shades of Grey in 1968."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "[London] Heinemann [1986]. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Stewart",
		"first_name": "John",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1971",
				"title": "Last Cool Days",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Andre Deutsch, 1971."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "Curving Road",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Urbana: University of Illinois Press, 1975."
					}
				]
			}
		]
	},
	{
		"last_name": "Symister",
		"first_name": "Leon Chaku",
		"birth_city": "",
		"birth_country": "Antigua",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1999",
				"title": "From The Depths of My Naked Soul: Chaku Writes (Poems)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Brooklyn: Caribbean Diaspora Press, 1999."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2000",
				"title": "Under the Calabash Tree (Stories)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Brooklyn: Caribbean Diaspora Press, 2000."
					}
				]
			}
		]
	},
	{
		"last_name": "Taylor",
		"first_name": "Stanley A.G.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1951",
				"title": "The Capture of Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1951."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1952",
				"title": "Buccaneer Bay",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1952."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1954",
				"title": "Pages From Our Past",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: Pioneer Press, 1954."
					}
				]
			}
		]
	},
	{
		"last_name": "Thelwell",
		"first_name": "Michael",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "The Harder They Come",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Grove Press, 1980."
					}
				]
			}
		]
	},
	{
		"last_name": "Thomas",
		"first_name": "G.C.H.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1972",
				"title": "Ruler in Hiroona",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port of Spain: Columbus Publishing, 1972."
					}
				]
			}
		]
	},
	{
		"last_name": "Thomas",
		"first_name": "H. Nigel",
		"birth_city": "",
		"birth_country": "St. Vincent",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["H. Nigel Thomas grew up on the Caribbean Island of St. Vincent. He is currently Professor of English at Laval University, Quebec."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "Spirits in the Dark",
				"summary": ["Nigel Thomas writes with compelling honesty about the confusing maze of pressures that paralyze Jerome Quashee, who undergoes a religious ritual, blocking all sensual links to the outside world in order to see clearly into his past and find the sources of the pain and guilt that torment his soul. His intelligence at first promises him a gateway out of the poverty his parents have known, but he must compete with privileged white boys for scholarships in a racist, class-ridden culture. He wrestles with both the guilt of knowing so little about his African heritage and the simultaneous pressure to think, speak, and act as a white person. And he will bring disgrace on his family if he does not suppress his emerging homosexuality. (Publisher's blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Heinemann, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Thomas",
		"first_name": "Herbert T.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1927",
				"title": "The Story of a West Indian Policeman",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1927."
					}
				]
			}
		]
	},
	{
		"last_name": "Thompson",
		"first_name": "Claude",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1943",
				"title": "These My People",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Herald Ltd., 1943."
					}
				]
			}
		]
	},
	{
		"last_name": "Tomlinson",
		"first_name": "F.C.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1903",
				"title": "The Helions or The Deeds of Rio",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Simpkin, Marshall, 1903."
					}
				]
			}
		]
	},
	{
		"last_name": "Tracy",
		"first_name": "Robert Archer",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "The Sword of Nemesis",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: AMS Press, 1975."
					}
				]
			}
		]
	},
	{
		"last_name": "Trotman",
		"first_name": "Althea",
		"birth_city": "",
		"birth_country": "Antigua/Canada",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Althea Trotman was the name used by the author Althea Prince while she was married to a person with the last name of Trotman."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "How The East Pond Got Its Flowers (Children's book)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "How The Star Fish Got to the Sea (Children's book)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1991."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Ladies of the Night and Other Stories",
				"summary": ["A collection of stories written under the author's real name, Althea Prince."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Toronto: Sister Vision Press, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Waite-Smith",
		"first_name": "Cicely [Howland]",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1943",
				"title": "Rain for the Plains and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Kingston: The Gleaner Co. Ltd., 1943."
					}
				]
			}
		]
	},
	{
		"last_name": "Walcott",
		"first_name": "Derek",
		"birth_city": "",
		"birth_country": "St. Lucia",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1930",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1948",
				"title": "25 Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Port of Spain: Guardian Commercial Printery, 1948."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1949",
				"title": "Epitaph for the Young: XII Cantos",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Babrados: Advocate, 1949."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "In a Green Night: Poems 1948-1960",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape [1962]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1964",
				"title": "Selected Poems",
				"summary": ["Part I comprises a selection from In a Green Night (Cape, 1962); Parts II and III, poems that were previously uncollected."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus & Company, 1964."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1965",
				"title": "The Castaway and Other Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1965."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1969",
				"title": "The Gulf and Other Poems",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1969."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "The Gulf",
				"summary": ["This collection of poems includes the whole of The Gulf and Other Poems (Cape, 1969) as well as selections from The Castaway and Other Poems (Cape, 1965)."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1970]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1970",
				"title": "Dream On Monkey Mountain and Other Plays",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1970]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1973",
				"title": "Another Life",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1973]."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape [1973]."
					},
					{
						"publisher": "",
						"pub_info": "Washington, DC: Three Continents Press, 1982. (Paperback)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Sea Grapes",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1976."
					},
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1976]. (Slightly revised edition)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "The Joker of Seville & O Babylon!: Two Plays",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1978]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "The Star-Apple Kingdom",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1979]."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1980."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Remembrance and Pantomime",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1980]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1981",
				"title": "The Fortunate Traveller",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1981]."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1982."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Midsummer",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1984]."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Three Plays: The Last Carnival; Beef, No Chicken; A Branch of the Blue Nile",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1986]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "Collected Poems 1948-1984",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1986]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Arkansas Testament",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1987]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1990",
				"title": "Omeros",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1990]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Antilles: Fragments of Epic Memory",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1993]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "The Odyssey: A Stage Version",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1993]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "Homage to Robert Frost",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1996]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1997",
				"title": "The Bounty",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1997]."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1998",
				"title": "What the Twilight Says: Essays",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Farrar, Straus and Giroux [1998]."
					}
				]
			}
		]
	},
	{
		"last_name": "Walrond",
		"first_name": "Eric",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1898",
		"death_day": "",
		"death_month": "",
		"death_year": "1966",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1926",
				"title": "Tropic Death",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Boni and Liveright, 1926."
					}
				]
			}
		]
	},
	{
		"last_name": "Warner",
		"first_name": "Basil",
		"birth_city": "",
		"birth_country": "St. Vincent",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2002",
				"title": "Killing Time Between Buses",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Highbridge Press, 2002."
					}
				]
			}
		]
	},
	{
		"last_name": "Warner",
		"first_name": "K.Q.",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "...And I'll Tell You No Lies",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Wellesley: Calaloux Publications, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Warner-Vieyra",
		"first_name": "Myriam",
		"birth_city": "",
		"birth_country": "Guadeloup",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "Juletane",
				"summary": ["When Helene is packing up her belongings in readiness for her imminent move and marriage, she unearths a faded old exercise book. As she reads she cannot anticipate the effect it will have upon her own future. It is the diary of Juletane, a young West Indian woman. Written over three weeks, it records her short life; her lonely childhood in France, her marriage to an African student, and her eager return, with him, to Africa -- the land of her ancestors. In stark contrast to her naive illusions, the social realities of traditional Muslim life and their cultural demands on her as a woman threaten to drive her to unendurable extremes of loneliness and complete alienation. She is a foreigner, in spite of the color of her skin. (Heinemann blurb)"],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Waters",
		"first_name": "Erika J.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "New Writing from the Caribbean: Selections from The Caribbean Writer (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Macmillan Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Webber",
		"first_name": "Albert Raymond Forbes",
		"birth_city": "",
		"birth_country": "Trinidad and Tobago",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1917",
				"title": "Those That Be in Bondage",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Georgetown: The Daily Chronicle Printing Press, 1917."
					},
					{
						"publisher": "",
						"pub_info": "Wellesley: Calaloux Publications, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Welsh",
		"first_name": "Sarah Lawson",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1996",
				"title": "The Routledge Reader in Caribbean Literature (1900-1990's) (Editor)",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London/New York: Routledge, 1996."
					}
				]
			}
		]
	},
	{
		"last_name": "Wheatley",
		"first_name": "Jennie N.",
		"birth_city": "",
		"birth_country": "British Virgin Islands",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Jennie Naomi Wheatley was born in 1939, in Tortola, Virgin Islands, where she received her early education. In 1960, she graduated from the Leeward Islands Teachers Training College in Antigua. After obtaining a B.A. (Honors English) and a B.Ed. from Canada's Mt. Allison University in 1970, Wheatley pursued further training in education at England's University of Leeds in 1981. For over forty years, Wheatley has taught primary and secondary schools throughout the Virgin Islands. The educator has served on the English Panel of the Caribbean Examinations Council and was a 'marker' for several years. Since its inception in 1990, Wheatley has served on the Board of Governors and as an adjunct lecturer at H. Lavity Stoutt Community College. In 1993, Jennie Wheatley was awarded the Most Excellent Order of the British Empire(M.B.E.) by Queen Elizabeth II for outstanding contribution to education and culture in the British Virgin Islands. Jennie Wheatley is married to Charles Wheatley and has three sons, Ludwis, Lloyd, and Leon."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Comprehension for Caribbean Examinations",
				"summary": [""],
				"editions": [
					{
						"publisher": "Macmillan",
						"pub_info": "Macmillan, 1979."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1984",
				"title": "Boysie and The Genips and Other Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "UNESCO",
						"pub_info": "UNESCO, 1984."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1991",
				"title": "Pass It On !!! A Treasury of Virgin Island Tales",
				"summary": ["These stories will help us ... evoke that spirit of adventure for which our forbears were well known and which our younger generation would wish to follow. - Ralph O'Neal, Chief Minister, British Virgin Islands"],
				"editions": [
					{
						"publisher": "WSTD Publishing",
						"pub_info": "WSTD Publishing, 1991."
					}
				]
			}
		]
	},
	{
		"last_name": "Wickham",
		"first_name": "John",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1993",
				"title": "Discoveries - Short Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Harlow,Essex: Longman, 1993."
					}
				]
			}
		]
	},
	{
		"last_name": "Williams",
		"first_name": "Denis",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1963",
				"title": "Other Leopards",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Hutchinson, 1963."
					},
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1983."
					}
				]
			}
		]
	},
	{
		"last_name": "Williams",
		"first_name": "G.",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1975",
				"title": "A Hero for Jamaica",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Exposition Press, 1975."
					}
				]
			}
		]
	},
	{
		"last_name": "Williams",
		"first_name": "Lorna",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1978",
				"title": "Jamaica Mento: A Collection of Short Stories",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Trinidad & Tobago: Publishing Associates Ltd., 1978."
					}
				]
			}
		]
	},
	{
		"last_name": "Williams",
		"first_name": "Noel D.",
		"birth_city": "",
		"birth_country": "Guyana",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1976",
				"title": "Ikael Torass",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Havana: Casa de las Americas, 1976."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1992",
				"title": "The Crying of Rainbirds",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds, Yorkshire: Peepal Tree, 1992."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1994",
				"title": "The Silence of Islands",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "Leeds, Yorkshire: Peepal Tree Press, 1994."
					}
				]
			}
		]
	},
	{
		"last_name": "Wilson",
		"first_name": "Betty",
		"birth_city": "",
		"birth_country": "[unknown]",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1989",
				"title": "Her True-True Name: An Anthology of Women's Writing from the Caribbean (Editor)", "summary": ["From memories of turn-of-the-century Dominica to the contemporary USA, Africa, and Britain, 31 women writers from throughout the Caribbean express the loss and the longing, the pride and passion of the Caribbean identity. Differences of language -- English, French, Spanish -- point to a common history of migration and imperialism. The precision of 'standard English' and the poetry of creole embody the rich contradictions of that heritage. Rooted in African old-tradition, a modern self-defining consciousness insists on calling itself by its 'true-true name.' The selections, arranged by country, include the following writers: Guyana -- Beryl Gilroy, Grace Nichols, Janice Shinebourne. Belize -- Zee Edgell. Cuba -- Omega Aguero, Mirta Yanez. Jamaica -- Erna Brodber, Michelle Cliff, Christine Craig, Velma Pollard, Joan Riley, Olive Senior, Sylvia Wynter Carew. Haiti -- Marie Chauvet (Marie Vieux). Dominican Republic -- Hilma Contreras. Puerto Rico -- Rosario Ferre, Magali Garcia Ramis, Carmen Lugo Filippi, Ana Lydia Vega. Antigua -- Jamaica Kincaid. Guadeloupe -- Maryse Conde, Simone Schwarz-Bart, Myriam Warner-Vieyra. Dominica --Jean Rhys, Phyllis Shand Allfrey, Barbados -- Paule Marshall. Grenada -- Merle Collins. Trinidad and Tobago -- Dionne Brand, Rosa Guy, Marion Patrick-Jones, Merle Hodge."],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Heinemann, 1989."
					}
				]
			}
		]
	},
	{
		"last_name": "Wilson",
		"first_name": "Cynthia",
		"birth_city": "",
		"birth_country": "Barbados",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1934",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": ["Cynthia Wilson was born in St. Philip, Barbados in 1934. She graduated from the University College of the West Indies, Jamaica, with a B.A. in history, Latin and English in 1957, followed with a Diploma in Education in 1958. Wilson worked as a high school English teacher in Jamaica and Morocco, before returning home in 1969, and serving in Barbados' Ministry of Foreign Affairs and at the Caribbean Tourism Research Centre. She was instrumental in establishing the National Independence Festival of creative Arts (NIFCA) in 1973, and for nearly thirty years has been representing her country and the cultural arts on national, regional and international boards, committees and fora in dance, theater and tourism. The president of Stage One Theatre Productions (1980-1982), manager of the Barbados Dance Theatre Company (1985-1988) and administrative director of WWB Productions (1986-1996), Wilson has also served as chairperson of the Association of Caribbean Theatre Artists (ACTA) and a director of the CARICOM Foundation for Arts and Culture. She is a member of numerous other cultural foundations, including the Barbados museum and historical society. Fluent in French and Spanish, she is well-known in Barbados and other parts of the Caribbean as an actor, storyteller, producer and dancer. As one of Barbados' grandes dames of the cultural arts, Wilson has produced 'Paint it Jazz' for the Barbados Jazz Festival (1994-1995), as well as the official presentations for royal visits and visiting dignitaries and heads of state (1975-1990), and numerous dance, musical and theater productions. In 1998, this wife and mother of three founded her nation's Stroke Support Group. The writing of poetry and stories has been a consistent but mostly private part of Wilson's life and professional career and 'Same Sea ... Another Wave' is her first book and the fruit of a long-standing dream. Awards and honors include the Barbados Service Star, the Bussa Award, University of the West Indies at Cave Hill Humanities Scholar, University of the West Indies at Mona Distinguished Graduate Award, and the Earl Warner Trust Lifetime Achievement Award."],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "2001",
				"title": "Same Sea ... Another Wave (Stories)",
				"summary": ["In Cynthia Wilson's Same Sea ... Another Wave Cyrilene Sargeant takes us into her world with all the unstoppable confidence of a precocious, deeply loved child. ... Caribbean writers do explore childhood, of course, but there are few who evoke so beautifully and completely credibly, a childhood in the Caribbean in an era that we can now see as the childhood of the modern Caribbean. - Kendel Hippolyte, Poet, Playwright, St Lucia"],
				"editions": [
					{
						"publisher": "House of Nehesi",
						"pub_info": "St. Martin: House of Nehesi, 2001. (Paperback)"
					}
				]
			}
		]
	},
	{
		"last_name": "Wilson",
		"first_name": "Jeanne",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1979",
				"title": "Mulatto",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "London: Macmillan, 1979."
					}
				]
			}
		]
	},
	{
		"last_name": "Winkler",
		"first_name": "Anthony C.",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1986",
				"title": "The Painted Canoe",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Lyle Stuart, 1986."
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1987",
				"title": "The Lunatic",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Lyle Stuart, 1987."
					}
				]
			}
		]
	},
	{
		"last_name": "Wynter",
		"first_name": "Silvia",
		"birth_city": "",
		"birth_country": "Jamaica",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "",
		"death_day": "",
		"death_month": "",
		"death_year": "",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1962",
				"title": "The Hills of Hebron",
				"summary": [""],
				"editions": [
					{
						"publisher": "",
						"pub_info": "New York: Simon and Schuster, 1962."
					},
					{
						"publisher": "",
						"pub_info": "London: Jonathan Cape, 1962."
					}
				]
			}
		]
	},
	{
		"last_name": "Zobel",
		"first_name": "Joseph",
		"birth_city": "",
		"birth_country": "Martinique/France/Senegal",
		"birth_day": "",
		"birth_month": "",
		"birth_year": "1915",
		"death_day": "",
		"death_month": "",
		"death_year": "2006",
		"bio": [""],
		"books": [
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1950",
				"title": "La rue cases-nègres",
				"summary": ["This novel is an account of a young boy raised by his grandmother in a post-slavery - but still plantation-based - Martinique. Later published in English as Black Shack Alley"],
				"editions": [
					{
						"publisher": "Jean Froissart",
						"pub_info": "Paris: Jean Froissart, 1950. (Limited edition of 1000 numbered copies on Corvol paper)"
					}
				]
			},
			{
				"pub_day": "",
				"pub_month": "",
				"pub_year": "1980",
				"title": "Black Shack Alley",
				"summary": ["English language edition of La rue cases-negres"],
				"editions": [
					{
						"publisher": "Three Continents Press",
						"pub_info": "Washington D.C.: Three Continents Press, 1980."
					},
					{
						"publisher": "Heinemann",
						"pub_info": "London: Heinemann, 1980. (Papreback)"
					}
				]
			}
		]
	}
];

ReactDOM.render(
  <App authors={AUTHORS} />,
  document.getElementById('root')
);
