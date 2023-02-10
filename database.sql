-- CREATE DATABASE "saga_movies_weekend"


CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL
);


CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL
);


-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres" NOT NULL
);

--------[ DATA! ]---------

-- starter movies
INSERT INTO "movies" ("title", "poster", "description")
VALUES 
('Alice in Wonderland', 'images/alice.jpg', 'Alice in Wonderland is a 1951 American animated film produced by Walt Disney Productions and based on the Alice books by Lewis Carroll.'),
('Amelie', 'images/amelie.jpg', 'Amélie is a 2001 French-language romantic comedy film directed by Jean-Pierre Jeunet. Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.'),
('The Banshees of Inisherin', 'images/banshees.jpg', 'The Banshees of Inisherin is a 2022 black tragicomedy film directed, written, and co-produced by Martin McDonagh. Set on a remote island off the west coast of Ireland, the film stars Colin Farrell and Brendan Gleeson as two lifelong friends who find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them.'),
('Birdman', 'images/birdman.jpg', 'Birdman or (The Unexpected Virtue of Ignorance), or simply Birdman, is a 2014 American black comedy-drama film directed by Alejandro González Iñárritu. It was written by Iñárritu, Nicolás Giacobone, Alexander Dinelaris Jr., and Armando Bó. The film stars Michael Keaton as Riggan Thomson, a faded Hollywood actor best known for playing the superhero "Birdman", as he struggles to mount a Broadway adaptation of the Raymond Carver short story, "What We Talk About When We Talk About Love".'),
('Clue', 'images/clue.jpg', 'Clue is a 1985 American mystery black comedy film based on the board game of the same name. Directed by Jonathan Lynn, who co-wrote the script with John Landis, and produced by Debra Hill, it stars the ensemble cast of Eileen Brennan, Tim Curry, Madeline Kahn, Christopher Lloyd, Michael McKean, Martin Mull, Lesley Ann Warren, and Colleen Camp.'),
('The Dark Knight', 'images/dark-knight.jpg', 'The Dark Knight is a 2008 superhero film directed by Christopher Nolan from a screenplay he co-wrote with his brother Jonathan. Based on the DC Comics superhero, Batman, it is the sequel to Batman Begins (2005). The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City. Their efforts are derailed by the Joker, an anarchistic mastermind who seeks to test how far Batman will go to save the city from chaos.'),
('Fargo', 'images/fargo.jpg', 'Fargo is a 1996 black comedy crime film written, produced and directed by Joel and Ethan Coen. Frances McDormand stars as Marge Gunderson, a pregnant Minnesota police chief investigating a triple homicide that takes place after a desperate car salesman (William H. Macy) hires two criminals (Steve Buscemi and Peter Stormare) to kidnap his wife in order to extort a hefty ransom from her wealthy father (Harve Presnell).'),
('The Fifth Element', 'images/fifth-element.jpg', 'The Fifth Element is a 1997 English-language French film conceived and directed by Luc Besson, as well as co-written by Besson and Robert Mark Kamen. It stars Bruce Willis, Gary Oldman, Ian Holm, Milla Jovovich and Chris Tucker. Primarily set in the 23rd century, the central plot involves the survival of planet Earth, which becomes the responsibility of Korben Dallas (Willis), a taxicab driver and former special forces major, after a young woman (Jovovich) falls into his cab. To accomplish this, Dallas joins forces with her to recover four mystical stones essential for the defence of Earth against the impending attack of a malevolent cosmic entity.'),
('Fire Walk With Me', 'images/fire-walk.jpg', 'Twin Peaks: Fire Walk with Me is a 1992 psychological horror film directed by David Lynch and written by Lynch and Robert Engels. It serves as a prequel to the television series Twin Peaks (1990–1991), created by Mark Frost and Lynch, who were also executive producers. It revolves around the investigation into the murder of Teresa Banks (Pamela Gidley) and the last seven days in the life of Laura Palmer (Sheryl Lee), a popular high school student in the fictional Washington town of Twin Peaks.'),
('The Fisher King', 'images/fisher-king.jpg', 'The Fisher King is a 1991 American fantasy comedy-drama film written by Richard LaGravenese and directed by Terry Gilliam. Starring Robin Williams and Jeff Bridges, with Mercedes Ruehl, Amanda Plummer, and Michael Jeter in supporting roles, the film tells the story of a radio shock jock who tries to find redemption by helping a man whose life he inadvertently shattered.'),
('Full Metal Jacket', 'images/full-metal.jpg', 'Full Metal Jacket is a 1987 war drama film directed and produced by Stanley Kubrick, who also co-wrote the screenplay with Michael Herr and Gustav Hasford. The film is based on the 1979 Hasford novel The Short-Timers and stars Matthew Modine, Lee Ermey, Vincent D''Onofrio and Adam Baldwin.'),
('Harold and Maude', 'images/harold-and-maude.jpg', 'Harold and Maude is a 1971 American romantic black comedy–drama film directed by Hal Ashby and released by Paramount Pictures. It incorporates elements of dark humor and existentialist drama. The plot follows the exploits of Harold Chasen (Bud Cort), a young man who is intrigued with death, and who rejects the life his detached mother (Vivian Pickles) prescribes for him. Harold develops a friendship, and eventual romantic relationship, with 79-year-old Maude (Ruth Gordon) who teaches Harold about the importance of living life to its fullest.'),
('Hook', 'images/hook.jpg', 'Hook is a 1991 American adventure film directed by Steven Spielberg and written by James V. Hart and Malia Scotch Marmo. It stars Robin Williams as Peter Banning / Peter Pan, Dustin Hoffman as Captain Hook, Julia Roberts as Tinker Bell, Bob Hoskins as Mr. Smee, and Maggie Smith as Granny Wendy. It acts as a sequel of sorts to J. M. Barrie''s 1911 novel Peter and Wendy focusing on an adult Peter Pan who has forgotten all about his childhood.'),
('One Flew Over the Cuckoo''s Nest', 'images/one-flew.jpg', 'One Flew Over the Cuckoo''s Nest is a 1975 American psychological comedy drama film directed by Miloš Forman, based on the 1962 novel of the same name by Ken Kesey. The film stars Jack Nicholson who plays a new patient at a mental institution alongside Louise Fletcher who plays an austere nurse. It also features a supporting cast of Will Sampson, Danny DeVito, Sydney Lassick, William Redfield, as well as Christopher Lloyd and Brad Dourif in their film debuts.'),
('Pan''s Labyrinth', 'images/pans-labyrinth.jpg', 'Pan''s Labyrinth is a 2006 dark fantasy horror film written, directed and co-produced by Guillermo del Toro. The story takes place in Spain during the summer of 1944, five years after the Spanish Civil War, during the early Francoist period. The narrative intertwines this real world with a mythical world centered on an overgrown, abandoned labyrinth and a mysterious faun creature, with whom the main character, Ofelia, interacts.'),
('Ratatouille', 'images/ratatouille.jpg', 'Ratatouille is a 2007 American computer-animated film produced by Pixar Animation Studios and released by Walt Disney Pictures. Set in Paris, the plot follows a young rat Remy (Oswalt) who dreams of becoming a chef at Auguste Gusteau''s (Garrett) restaurant and tries to achieve his goal by forming an unlikely alliance with a restaurant''s garbage boy Alfredo Linguini (Romano).'),
('Who Framed Roger Rabbit?', 'images/roger-rabbit.jpg', 'Who Framed Roger Rabbit is a 1988 American fantasy comedy mystery film directed by Robert Zemeckis, and written by Jeffrey Price and Peter S. Seaman, based on Gary K. Wolf''s 1981 novel Who Censored Roger Rabbit?. The film stars Bob Hoskins, Christopher Lloyd, Stubby Kaye, and Joanna Cassidy, with the voices of Charles Fleischer and Kathleen Turner. Combining live-action and animation, Who Framed Roger Rabbit is set in an alternate history Hollywood in 1947, where humans and cartoon characters (referred to as "toons") co-exist. The film follows Eddie Valiant, a private investigator with a prejudice against cartoons who must help exonerate Roger Rabbit, a toon framed for murder.'),
('Un Chien Andalou', 'images/un-chien.jpg', 'Un Chien Andalou is a 1929 French silent short film directed by Luis Buñuel, and written by Buñuel and Salvador Dalí.'),
('Vertigo', 'images/vertigo.jpg', 'Vertigo is a 1958 American film noir psychological thriller film directed and produced by Alfred Hitchcock. The story was based on the 1954 novel D''entre les morts (From Among the Dead) by Boileau-Narcejac. The screenplay was written by Alec Coppel and Samuel A. Taylor. The film stars James Stewart as former police detective John "Scottie" Ferguson, who has retired because an incident in the line of duty has caused him to develop acrophobia (an extreme fear of heights) and vertigo, a false sense of rotational movement. Scottie is hired by an acquaintance, Gavin Elster, as a private investigator to follow Gavin''s wife Madeleine (Kim Novak), who is behaving strangely.'),
('Young Frankenstein', 'images/young-frank.jpg', 'Young Frankenstein is a 1974 American comedy horror film directed by Mel Brooks. The screenplay was co-written by Brooks and Gene Wilder. Wilder also starred in the lead role as the title character, a descendant of the infamous Dr. Victor Frankenstein. Peter Boyle portrayed the monster.');


-- starter genres
INSERT INTO "genres" ("name")
VALUES 
('Adventure'),
('Animated'),
('Surrealist'),
('Comedy'),
('Horror'),
('Drama'),
('War'),
('Fantasy'),
('Musical'),
('Romantic'),         --10
('Science Fiction'),  --11
('Space-Opera'),      --12
('Superhero'),        --13
('Noir'),             --14
('Thriller');         --15


-- starter movies and genres data
INSERT INTO "movies_genres" ("movie_id", "genre_id")
VALUES 
(1,2), (1,9),             -- Alice in Wonderland
(2,10),                   -- Amelie
(3,4), (3,6),             -- The Banshees of Inisherin
(4,4), (4,6), (4,13),     -- Birdman
(5,4),                    -- Clue
(6,6), (6,13),            -- The Dark Knight
(7,4), (7,6),             -- Fargo
(8,11), (8,12),           -- The Fifth Element
(9,5), (9,6),             -- Fire Walk With Me
(10,6), (10,8),           -- The Fisher King
(11,6), (11,7),           -- Full Metal Jacket
(12,4), (12,6), (12,10),  -- Harold and Maude
(13,1), (13,8),           -- Hook
(14,6),                   -- One Flew Over the Cuckoo's Nest
(15,5), (15,6), (15,8),   -- Pan's Labyrinth
(16,2),                   -- Ratatouille
(17,2), (17,4), (17,14),  -- Who Framed Roger Rabbit?
(18,3),                   -- Un Chien Andalou
(19,14), (19,15),         -- Vertigo
(20,4);                   -- Young Frankenstein