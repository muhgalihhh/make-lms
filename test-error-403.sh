#!/bin/bash

echo "🧪 Testing Custom Error Page 403..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to test URL
test_url() {
    local url=$1
    local description=$2
    
    echo -e "${YELLOW}Testing: $description${NC}"
    echo "URL: $url"
    
    # Test with curl
    if command -v curl &> /dev/null; then
        response=$(curl -s -o /dev/null -w "%{http_code}" "$url")
        if [ "$response" = "200" ]; then
            echo -e "${GREEN}✅ Status: $response - OK${NC}"
        else
            echo -e "${RED}❌ Status: $response - Error${NC}"
        fi
    else
        echo -e "${YELLOW}⚠️  curl tidak tersedia${NC}"
    fi
    
    echo ""
}

# Function to check file exists
check_file() {
    local file=$1
    local description=$2
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $description: $file${NC}"
    else
        echo -e "${RED}❌ $description: $file (tidak ditemukan)${NC}"
    fi
}

# Function to check environment variable
check_env() {
    local var=$1
    local value=$(grep "^$var=" .env | cut -d'=' -f2)
    
    if [ "$value" = "false" ]; then
        echo -e "${GREEN}✅ $var=$value${NC}"
    else
        echo -e "${RED}❌ $var=$value (seharusnya false)${NC}"
    fi
}

echo "📋 Checking Configuration Files..."
echo ""

# Check required files
check_file "app/Exceptions/Handler.php" "Exception Handler"
check_file "app/Http/Middleware/RoleMiddleware.php" "Role Middleware"
check_file "resources/js/components/ErrorPage.tsx" "Error Page Component"
check_file "resources/js/pages/errors/403.tsx" "403 Error Page"
check_file "routes/errors.php" "Error Routes"
check_file "bootstrap/app.php" "Bootstrap App"
check_file ".env" "Environment File"

echo ""
echo "🔧 Checking Environment Variables..."
echo ""

# Check environment variables
check_env "APP_DEBUG"

echo ""
echo "🌐 Testing URLs..."
echo ""

# Test URLs
test_url "http://localhost:8000/errors/403" "Direct 403 Error Page"
test_url "http://localhost:8000/errors/403-test" "403 Test Route (AuthorizationException)"

echo ""
echo "📝 Manual Testing Instructions:"
echo "1. Login dengan user non-admin"
echo "2. Coba akses: http://localhost:8000/admin/dashboard"
echo "3. Seharusnya muncul custom error page 403"
echo ""
echo "🔍 Debugging Tips:"
echo "- Periksa browser console untuk error JavaScript"
echo "- Periksa network tab untuk response dari server"
echo "- Periksa Laravel logs: tail -f storage/logs/laravel.log"
echo ""
echo "🛠️  Jika masih bermasalah, jalankan:"
echo "chmod +x fix-error-403.sh && ./fix-error-403.sh"