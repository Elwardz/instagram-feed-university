export const posts = Array.from({ length: 20 }).map((_, index) => ({
  username: `user${index + 1}`,
  avatarUrl: `https://i.pravatar.cc/150?img=${index + 1}`,
  imageUrl: `https://picsum.photos/seed/${index + 1}/600/400`,  // 👈 Aqui mudou
  numberOfLikes: Math.floor(Math.random() * 500),
  description: `Post #${index + 1} - Lorem ipsum dolor sit amet #hashtag #loremipsum`,
}));

