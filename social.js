const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

// Implement a function biggestFollower() which returns the name of the individual who follows the most people.
const biggestFollower = (users) => {
  let result;

  for (let user of Object.keys(users)) {
    if (result) {
      if (users[user].follows.length > result.follows.length) {
        result = users[user];
      }
    } else {
      result = users[user];
    }
  }

  return `Biggest follower is ${result.name}`;
};

console.log(biggestFollower(data));

// Implement mostPopular() which returns the name of the most popular (most followed) individual.
const mostPopular = (users) => {
  let followed = {};

  for (let user of Object.keys(users)) {
    let followers = users[user].follows;
    for (let follower of followers) {
      followed[follower] = followed[follower] + 1 || 1;
    }
  }

  const max = Object.keys(followed).filter((x) => {
    console.log(x);
    return followed[x] == Math.max.apply(null, Object.values(followed));
  });

  const winners = max.map((winner) => {
    return users[winner].name;
  });

  return `More followers has: ${winners.join(", ")}`;
};

console.log(mostPopular(data));

// Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

// Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

// Implement some or all these remaining functions.

// Identify who has the most followers over 30

// Identify who follows the most people over 30

// List everyone and their reach (sum of # of followers and # of followers of followers)
