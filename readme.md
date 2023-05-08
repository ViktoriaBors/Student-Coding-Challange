# Vocaire Coding Challange.

Hey, Thanks for taking the time to complete this coding challange!

This challange has two parts.

- Part 1 is a small coding task with APIs and some CSS.
- Part 2 is a small questionarre.

# Handing in

For clarity please fork this git repo and create your own branch which you'll work from.

Once done send me (peter@vocaire.ai) a link to your **public** fork.

# Challenges

## Part 1 -- CSS and Forms.

On this part, please focus on the UI/UX aspects. Please do not overengineer code, the emphasis here is on being quick and providing the user with a great experience!

Use a CSS library of your choice, I would recommend either [Tailwind](https://tailwindcss.com/) or [Tabler](https://tabler.io).

### Create a project using any of the following frameworks:

- React
- Vue
- Svelte
- Angular

### The project should only contain one page of a form.

No need to implement any routes.

### On this form page, obtain the following information from the user:

- Organisation
- Name
- Email
- Phone Number

### Validate the obtained values on the frontend, check if the details are 'real' with a 'degree' of certainty.

The endpoint below does not perform any validation.

### The form needs to be submitted with the details below:

```bash
POST https://europe-west1-vocaire-main.cloudfunctions.net/student_test
```

```typescript
export type StudentRequest = {
  org: string;
  name: string;
  email: string;
  phone: string;
};
```

## Part 2 -- Questionarre.

1. The project above has a couple of design flaws in it. Can you point at least one out?
   - [Answer]
2. Suppose you are working with OAuth2 tokens, how long until they expire? Please provide an answer for both access and refresh tokens.
   - [Answer]
3. 57 68 61 74 20 64 6F 20 79 6F 75 20 74 68 69 6E 6B 2C 20 77 68 61 74 20 69 73 20 74 68 65 20 63 6F 6F 6C 65 73 74 20 6E 65 77 20 74 65 63 68 20 6F 75 74 20 74 68 65 72 65 3F ?
   - [Answer]
