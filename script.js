const videos = [
  { title: "Overall Highlights", src: "OverallHighlights.mp4" },
  { title: "First Week", src: "FirstWeek.mp4" },
  { title: "Starting School Week", src: "StartingSchoolWeek.mp4" },
  { title: "Giverny", src: "Giverny.mp4" },
  { title: "South Of France", src: "SouthOfFrance.mp4" },
  { title: "Disney Part 1", src: "DisneyPart1.mp4" },
  { title: "London", src: "London.mp4" },
  { title: "Disney Part 2", src: "DisneyPart2.mp4" },
  { title: "RenFair", src: "RenFair.mp4" }
];

let current = 0;

function updateVideo() {
  const videoPlayer = document.getElementById('videoPlayer');
  const videoTitle = document.getElementById('videoTitle');
  videoPlayer.src = videos[current].src;
  videoTitle.textContent = videos[current].title;
  videoPlayer.load();
}

function nextVideo() {
  current = (current + 1) % videos.length;
  updateVideo();
}

function prevVideo() {
  current = (current - 1 + videos.length) % videos.length;
  updateVideo();
}