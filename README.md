# LIRTT Starter Kit

A starter template for building web applications with ***L*aravel**, ***I*nertia**, ***R*eact**, ***T*ypeScript**, and ***T*ailwind CSS** — powered by **Laravel Sail** for easy Docker development and using **Vite** for fast asset building.

- **Laravel 11**
- **Inertia.js**
- **React 18 with TypeScript**
- **Tailwind CSS**

## Highlights

- Laravel's default Docker development environment via [Laravel Sail](https://laravel.com/docs/11.x/sail), including:
    - MySQL
    - Redis
    - Meilisearch
    - mailpit
    - Selenium
- Simple implementation of all of Laravel's authentication features via Laravel Breeze
- Vite
- CSS Variables for defining dynamic customizable theme properties extended through Tailwind CSS

## Prerequisites

Make sure you have [**Docker**](https://docs.docker.com/engine/install/) installed on your local machine before setting up the project.

## First Time Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/A-M-Assaf/LIRTT.git
   cd LIRTT
   ```

2. Run
    ```shell
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php83-composer:latest \
        composer install --ignore-platform-reqs
    ```
3. Copy `.env.example` to your `.env`

4. Start the development environment with Laravel Sail:
    ```shell
    ./vendor/bin/sail up -d
    ```

5. Run
    ```shell
    ./vendor/bin/sail npm install
    ```

6. Generate the application key:
   ```bash
   ./vendor/bin/sail artisan key:generate
   ```

7. Run
    ```shell
    ./vendor/bin/sail artisan migrate
    ```

## Usage

1. Run
    ```shell
    ./vendor/bin/sail up -d
    ```

2. Run
    ```shell
    ./vendor/bin/sail npm run dev
    ```
Now you can visit `http://localhost` in your browser.

Enjoy it :)

### Tip
Create an alias for sail commands:

Add the alias to your shell configuration file in your home (or project) directory, such as `~/.zshrc` or `~/.bashrc`, and then restart your shell.
   ```shell
    alias sail='sh $([ -f sail ] && echo sail || echo vendor/bin/sail)'
   ```

## License

MIT