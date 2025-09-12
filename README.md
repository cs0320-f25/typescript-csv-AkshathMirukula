# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
    - Commas and new lines are not correctly read by the parser. It should be able to detect when a new line is part of an entry and when quotes surround an entry with a comma in it.
    - Uneven column amounts may not be correctly read by the csv. If this is the case, it needs to be able to detect when rows have different numbers of entries and adjust accordingly.
    - Empty entries may be skipped or incorrectly read by the csv. The parser needs to notice when an entry has no characters (including spaces) and record it as such.
    - The parsed csv files currently only have one return type. Allow the user to specify the output type (e.g: arrays, objects, JSON, etc.)

- #### Step 2: Use an LLM to help expand your perspective.

    The parser suggested a variety of features and edge cases to consider. It came up with a lot of extra features such as custom delimiters, header row options, detailed error messages, etc. Having these extra features are something I didn't really consider before. However, I think my first priority should be to ensure that it operates properly before implementing extra items.

    Therefore, for my next prompt, I decided to ask specifically for edge cases I might miss out on. It implored me to think about fields with escaped quotes, trailing commas, blank lines, custom delimiters (instead of commas), and other unique items I might encounter with csv files.

    For my next prompt, I decided to ask specifically for extra features. It offered several ideas, including automatic type inference, progress reporting for large files, header row customization, and other extra things to think about. These ideas would be useful to implemenet after ensuring that the the parser works as intended, edge cases considered. 

    The proposed features changed depending on whether I asked for any and all improvements or specific to edge cases/extra features.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Functionality
    1. As a user, I can input csv's with new lines and entries with commas in them (with the latter being surrounded by quotes) so I can correctly parse these files. (My idea)
    2. As a user, I can input csv's with blank rows and have the parser read them as empty rows so I can correctly parse these files. (LLM)

    Extensibility
    3. As a user, I can specify the return type to be outputted by the parser so I can receive the data I need for personal use.(My idea)
    4. As a user, I can implement progress reporting milestones for exceptionally large files so I can receive updates on parsed data, reassuring me that progress is being made. (LLM)

    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 

    My initial proposal ideas were purely functionality-based. I was mostly concerned about figuring out edge cases or errors that the parser wouldn't pick up on. The biggest value I found in the LLM was suggesting extra features to potentially implement when full minimum functionality is achieved. It offered potnetial features that would let the user customize the data outputted by the parser, which I found to resonate with me. What didn't resonate with me as much was the lack of emphasis on functionality-based features first.

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
