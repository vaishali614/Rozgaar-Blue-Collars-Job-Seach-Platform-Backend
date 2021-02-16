## Unit-Tests

- ### User

##### UserManager

1. **Create User - Test Cases**
   (i) All valid Entries should add a new user to the DB.
   (ii) All data added should hold equality.
   (iii) Invalid Entries should result in status code - 400 for invalid.
   request.
   (iv) Valid Entries should result in status code 201.
   (v) The returned schema is same as expected structure.
   (vi) Test to check failure when duplicate aadharNumber entry is made.
   Simlar Tests for `UserController` & `UserServices` by using stubs for dependencies.

- ### Job

##### JobManager

1. **getAllJobs - Test Cases**
   (i) Should return an array of Job Objects.
   (ii) Should return an empty array in case of invalid category.
2. **createJob - Test Cases**
   (i) All valid Entries should add a new job to the DB.
   (ii) All data added should hold equality.
   (iii) Invalid Entries should result in status code - 400 for invalid.
   request.
   (iv) Valid Entries should result in status code 201.
   (v) The returned schema is same as expected structure.
3. **getAllCandidates - Test Cases**
   (i) Should return an array of Job Objects.
   (ii) Should return an empty array in case of invalid category.
4. **applyToAJob - Test Cases**
   (i) Valid job_id and aadharNumber should call the sendSMS function twice and sendMail function once
   (ii) aadharNumber which doesn't yet exixts in the Users Collection should give an error
   (iii) Inavlid Job Id shall throw error
   (iv) Invalid Phone Number/Email-Id throws Error - JobServices
   Simlar Tests for `JobController` & `JobServices` by using stubs for dependencies.