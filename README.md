# agad-hooks-practical-exam

One React (Vite) project with all six practical exams. Use the Exam 1 to 6 buttons at the top to switch between them.

## Run

npm install
npm run dev

## Completed requirements

- Exam 1, Smart Task Counter (useState): count and target state, Increment/Decrement/Reset, plus two with two functional updates, derived status, buttons disabled at the target.
- Exam 2, Live Search and Timer (useEffect): delayed search with cleanup, one second timer with cleanup, result count in the document title.
- Exam 3, Accessible Form Toolkit (useRef and useState): controlled inputs, three refs, validation messages, focus on the first invalid field, previous submitted email kept in a ref.
- Exam 4, Application Preferences (useContext): one context and provider, theme and font size (14, 16, 18), usePreferences hook that throws outside the provider.
- Exam 5, Product Explorer Performance Repair (useMemo and useCallback): 600 products, search, category, price sort, memoized list, memoized callback, React.memo ProductList, unrelated counter.
- Exam 6, Issue Tracker State Engine (useReducer and custom Hooks): five reducer actions, pure and immutable reducer, usePersistentReducer with localStorage, All/Open/Done views with counts, three reducer tests.

## Known limitations

- Exam 1: Plus Two can take the count past the target (for example 4 becomes 6) because the exam only asks to disable the buttons after the target is reached.
- Exam 5: ProductList renders once when a product is selected, because the selected value is stored in the parent.
- Exam 6: tests cover only add, toggle, and clear done.
- The Exam 1 to 6 buttons in App.jsx are plain useState, not a router.

## Test steps

1. Run npm install, then npm run dev, and open the link shown.
2. Exam 1: with target 5, click Increment to 5 and check the buttons are disabled. Start at 4 and click Plus Two. Click Decrement at 0. Click Reset after the target.
3. Exam 2: type "an" and see two results after a short delay. Watch the seconds go up by one. Switch exams and come back.
4. Exam 3: submit empty and check focus goes to Name, then Email, then Password. Submit two valid emails in a row and check the previous email shows.
5. Exam 4: toggle the theme and check the Dashboard and Article Preview change together. Click 14px, 16px, and 18px.
6. Exam 5: open the console, click the unrelated counter, and check nothing is logged. Then type in the search box and check both messages are logged.
7. Exam 6: add, toggle, delete, and clear done. Switch filters. Refresh and check the issues are still there. Run npm test and check 3 tests pass.