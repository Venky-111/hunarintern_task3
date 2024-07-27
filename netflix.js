document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
const movieGrid = document.getElementById('movieGrid');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
leftBtn.addEventListener('click', () => {
    movieGrid.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});
rightBtn.addEventListener('click', () => {
    movieGrid.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
const trailerModal = document.getElementById('trailerModal');
const trailerContainer = document.getElementById('trailerContainer');
const description = document.getElementById('description');
const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    trailerModal.style.display = 'none';
    trailerContainer.innerHTML = '';
    description.innerHTML = '';
}
window.onclick = function(event) {
    if (event.target == trailerModal) {
        trailerModal.style.display = 'none';
        trailerContainer.innerHTML = '';
        description.innerHTML = '';
    }
}
const mediaData = [
    {
        type: 'movie',
        title: 'Kalki 2898AD',
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/f1zcm0paqaamjnp-three_four.jpg?VersionId=Seoj.amE4_xHpItwOnBGbnCeqYS20_fA',
        trailer: 'https://youtu.be/BfCIPsEGAS8',
        description: 'Kalki 2898 AD is a 2024 Indian Telugu-language epic science fiction film directed by Nag Ashwin and produced by Vyjayanthi Movies.'
    },
    {
        type: 'movie',
        title: 'Salaar',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5II6s36wZCog2HnC_FzySpkCXNZOEZaCMnA&s',
        trailer: 'https://www.youtube.com/watch?v=JKLHbBwyFbw',
        description: 'Salaar: Part 1 – Ceasefire (transl. Commander: Part 1 - Ceasefire) is a 2023 Indian Telugu-language epic action thriller film written and directed by Prashanth Neel, and produced by Vijay Kiragandur. The film stars Prabhas as the title character alongside Prithviraj Sukumaran, Shruti Haasan, Jagapathi Babu, Bobby Simha, and Sriya Reddy.'
    },
    {
        type: 'movie',
        title: 'Adipurush',
        img: 'https://filmfare.wwmindia.com/content/2022/sep/adipurush-poster-first-look.jpg',
        trailer: 'https://www.youtube.com/embed/trailer3',
        description: 'Adipurush (transl. First man)[a] is a 2023 Indian mythological action film based on the Hindu epic Ramayana.[8] The film is directed and co-written by Om Raut, and produced by T-Series and Retrophiles. Shot simultaneously in Hindi and Telugu, the film features Prabhas, Saif Ali Khan, Kriti Sanon, Sunny Singh, and Devdutta Nage.'
    },
    {
        type: 'movie',
        title: 'Radhe Shyam',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-In6aywAOX-W5w5qXJlHazE_8Nnudnx75Q&s',
        trailer: 'https://www.youtube.com/embed/trailer4',
        description: 'Radhe Shyam is a 2022 Indian period romantic drama film written and directed by Radha Krishna Kumar. Produced by UV Creations and T-Series, the film was shot simultaneously in Telugu and Hindi languages and stars Prabhas and Pooja Hegde with an ensemble supporting cast. Set in 1970s Italy, the film revolves around a young palmist named Vikramaditya, who is conflicted between his destiny and his love for Dr. Prerana.'
    },
    {
        type: 'movie',
        title: 'Saaho',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB76xVLRLg0Z7qgXzzsqGELxarjR8UTwTlyw&s',
        trailer: 'https://www.youtube.com/embed/trailer5',
        description: 'Saaho (transl. May Victory be Yours) is a 2019 Indian action thriller film directed by Sujeeth and produced by UV Creations and T-Series.[3] The film, shot simultaneously in Telugu and Hindi, stars Prabhas in the title role, alongside Shraddha Kapoor, Chunky Pandey, Jackie Shroff, Arun Vijay, Neil Nitin Mukesh, Lal, Murali Sharma, Mandira Bedi, Mahesh Manjrekar, Prakash Belawadi, Tinnu Anand, Evelyn Sharma, Supreeth, Devan and Vennela Kishore.'
    },
    {
        type: 'movie',
        title: 'Baahubali',
        img: 'https://c8.alamy.com/comp/2JE359T/prabhas-poster-baahubali-the-beginning-2015-2JE359T.jpg',
        trailer: 'https://www.youtube.com/embed/trailer6',
        description: 'Baahubali: The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, and Nassar.'
    },
    {
        type: 'movie',
        title: 'Chatrapathi',
        img: 'https://pbs.twimg.com/media/Ehot8VvUcAEo5Hi.jpg',
        trailer: 'https://www.youtube.com/embed/trailer7',
        description: 'Chhatrapathi is a 2005 Indian Telugu-language action film co-written & directed by S. S. Rajamouli from a story written by V. Vijayendra Prasad & dialogues written by M. Rathnam. The film is produced by B. V. S. N. Prasad under Sri Venkateswara Cine Chitra. The film stars Prabhas, Shriya Saran and Bhanupriya alongside Shafi and Pradeep Rawat played supporting roles.'
    },
    {
        type: 'movie',
        title: 'Mirchi',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShZXkoZzpZzfoQic7InzzJKnQCA844PZGiWAcleu8FpeCnnVkRU7H9FD1lyRR-vri6Pac&usqp=CAU',
        trailer: 'https://www.youtube.com/embed/trailer8',
        description: 'Mirchi (transl. Chilli) is a 2013 Indian Telugu-language action drama film written and directed by debutante Koratala Siva, and produced by UV Creations.[3] The film stars Prabhas, Anushka Shetty and Richa Gangopadhyay with Sathyaraj, Nadhiya Moidu, Sampath Raj, Adithya Menon, Subbaraju and Brahmanandam featuring in supporting roles.'
    },
    {
        type: 'movie',
        title: 'Darling',
        img: 'https://i.pinimg.com/564x/cc/5c/51/cc5c51bf09017dd589b9379594794f4d.jpg',
        trailer: 'https://www.youtube.com/embed/trailer9',
        description: 'Darling is a 2010 Indian Telugu-language romantic comedy film directed by A. Karunakaran. It is produced by B. V. S. N. Prasad under his studio Sri Venkateswara Cine Chitra. The film stars Prabhas and Kajal Aggarwal. The music is composed by G. V. Prakash Kumar.'
    },
    {
        type: 'movie',
        title: 'Baahubali 2',
        img: 'https://rukminim2.flixcart.com/image/850/1000/l2hwwi80/poster/y/m/q/small-poster-prabhas-baahubali-movie-ultra-2-sl873-wall-poster-original-imagdtv8xbgrgznq.jpeg?q=90&crop=false',
        trailer: 'https://www.youtube.com/embed/trailer10',
        description: 'Baahubali 2: The Conclusion is a 2017 Indian Telugu-language epic action film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. The film was produced by Shobu Yarlagadda and Prasad Devineni under the banner Arka Media Works. The film was produced in Tollywood, and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, Nassar, and Subbaraju.'
    },
    {
        type: 'series',
        title: 'Breaking Bad',
        img: 'https://static.toiimg.com/thumb/msid-91961886,imgsize-68616,width-900,height-1200,resizemode-6/91961886.jpg',
        trailer: 'https://www.youtube.com/embed/trailer11',
        description: 'Breaking Bad is an American crime drama television series created and produced by Vince Gilligan for AMC. Set and filmed in Albuquerque, New Mexico, the series follows Walter White (Bryan Cranston), an underpaid, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer.'
    },
    {
        type: 'series',
        title: 'Game of Thrones',
        img: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
        trailer: 'https://www.youtube.com/embed/trailer12',
        description: 'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, a series of fantasy novels by George R. R. Martin, the first of which is A Game of Thrones. The show premiered on HBO in the United States on April 17, 2011, and concluded on May 19, 2019, with 73 episodes broadcast over eight seasons.'
    },
    {
        type: 'series',
        title: 'Stranger Things',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJH-n02M3TtjnuBWjoFovi-uMJ_2gWRgSEA&s',
        trailer: 'https://www.youtube.com/embed/trailer13',
        description: 'Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016.'
    },
    {
        type: 'series',
        title: 'Money Heist',
        img: 'https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==',
        trailer: 'https://www.youtube.com/embed/trailer14',
        description: 'Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. The House of Paper) is a Spanish heist crime drama television series created by Álex Pina.'
    },
    {
        type: 'series',
        title: 'True Detective',
        img: 'https://upload.wikimedia.org/wikipedia/en/5/5a/True_Detective_2014_Intertitle.jpg',
        trailer: 'https://www.youtube.com/embed/trailer15',
        description: 'True Detective is an American anthology crime drama television series created by Nic Pizzolatto. The series, broadcast by the premium cable network HBO in the United States, premiered on January 12, 2014. Each season of the series is structured as a self-contained narrative, employing new cast ensembles, and following various sets of characters and settings.'
    },
    {
        type: 'series',
        title: 'Dexter',
        img: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Dexter_TV_Series_Title_Card.jpg',
        trailer: 'https://www.youtube.com/embed/trailer16',
        description: 'Dexter is an American crime drama television series that aired on Showtime from October 1, 2006, to September 22, 2013.[1] Set in Miami, the series centers on Dexter Morgan (Michael C. Hall), a forensic technician specializing in bloodstain pattern analysis for the fictional Miami Metro Police Department, who leads a secret parallel life as a vigilante serial killer, hunting down murderers who have not been adequately punished by the justice system due to corruption or legal technicalities.'
    },
    {
        type: 'series',
        title: 'The Walking Dead',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Walking_Dead_2010_logo.svg/330px-The_Walking_Dead_2010_logo.svg.png',
        trailer: 'https://www.youtube.com/embed/trailer17',
        description: 'The Walking Dead is an American post-apocalyptic horror drama television series developed by Frank Darabont, based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. Together, the show and the comic book series form the core of The Walking Dead franchise.'
    },
    {
        type: 'series',
        title: 'Sons of Anarchy',
        img: 'https://upload.wikimedia.org/wikipedia/en/7/7b/SOATitlecard.jpg',
        trailer: 'https://www.youtube.com/embed/trailer18',
        description: 'Sons of Anarchy is an American action crime drama television series created by Kurt Sutter for FX. Originally aired from September 3, 2008, to December 9, 2014, Sons of Anarchy follows the lives of a close-knit outlaw motorcycle club operating in Charming, a fictional town in Californias Central Valley.'
    },
    {
        type: 'series',
        title: 'Better Call Saul',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/375px-Better_Call_Saul_logo.svg.png',
        trailer: 'https://www.youtube.com/embed/trailer19',
        description: 'Better Call Saul is an American legal crime drama television series created by Vince Gilligan and Peter Gould for AMC. Part of the Breaking Bad franchise, it is a spin-off of Gilligans previous series, Breaking Bad (2008–2013), to which it serves primarily as a prequel, with some scenes taking place during and after the events of Breaking Bad.'
    },
    {
        type: 'series',
        title: 'Seinfeld',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Seinfeld_logo.svg/330px-Seinfeld_logo.svg.png',
        trailer: 'https://www.youtube.com/embed/trailer20',
        description: 'Seinfeld (/ˈsaɪnfɛld/ SYNE-feld) is an American television sitcom created by Larry David and Jerry Seinfeld that originally aired on NBC from July 5, 1989 to May 14, 1998, with a total of nine seasons consisting of 180 episodes.'
    }
];
mediaData.forEach(media => {
    const mediaElement = document.createElement('div');
    mediaElement.classList.add('movie');
    mediaElement.innerHTML = `<img src="${media.img}" alt="${media.title}">`;
    mediaElement.addEventListener('click', () => {
        trailerModal.style.display = 'block';
        trailerContainer.innerHTML = `<iframe width="100%" height="400" src="${media.trailer}" frameborder="0" allowfullscreen></iframe>`;
        description.innerText = media.description;
    });
    movieGrid.appendChild(mediaElement);
});
document.getElementById('homeBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});