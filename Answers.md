# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a library developed by Facebook. It's main purpose is to facilitate the handling of large amounts of constantly changing data within the UI - to provide functionality for all of the moving parts in a way that scales up to global levels. 

1. What does it mean to think in react?

React is all about components. To 'think' in react is to compartmentalize; structured, tidy, reusable pieces of code come together to form one cohesive piece. 

1. Describe state.

Simply put, 'state' is just the current data each component has to work with. 

1. Describe props.

props are the properties of a component as they relate to other components. In other words, props are the 'state' of other components that you are passing in to the current component. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

a 'side effect' is anything which makes changes (affects) something outside of the scope of the function it's currently in. To manage and sync side effects, you pass a dependancy array as the second paramater of your useEffect.  