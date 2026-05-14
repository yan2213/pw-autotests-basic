Playwright - basic

# pw-autotests-basic

Automated UI tests built with [Playwright](https://playwright.dev/), running across Chromium, Firefox, and WebKit.

## 🚀 Tech Stack

- [Playwright](https://playwright.dev/) — end-to-end testing framework
- TypeScript
- GitHub Actions — CI/CD pipeline

## 📁 Project Structure

tests/
example.spec.ts   
login.spec.ts   
playwright.config.ts
.github/workflows/ 

## ⚙️ Installation

```bash
npm install
npx playwright install
```

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run in headed mode:
```bash
npx playwright test --headed
```

Run specific file:
```bash
npx playwright test tests/login.spec.ts
```

Run in specific browser:
```bash
npx playwright test --project=chromium
```

## 📊 Test Report

```bash
npx playwright show-report
```

## 🧪 Test Cases

### Test 1: Verify login with valid credentials

**Base URL:** `https://practicesoftwaretesting.com`

**Steps:**
1. Open `/auth/login`
2. Fill in credentials:
   - Email: `customer@practicesoftwaretesting.com`
   - Password: `welcome01`
3. Click the Login button

**Assertions:**
- URL redirects to `/account`
- Page title is "My Account"
- Username "Jane Doe" appears in the navigation bar

## CI/CD

Tests run automatically on every push and pull request via GitHub Actions across Chromium, Firefox, and WebKit.

##  Known Issues

- `login` tests are currently skipped (`test.skip`) — under development.