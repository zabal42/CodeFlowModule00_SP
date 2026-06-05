NAME     := calculator
CXX      := c++
CXXFLAGS := -Wall -Wextra -Werror -std=c++17

SRC_DIR  := src
INC_DIR  := inc
TEST_DIR := tests

SRCS     := $(SRC_DIR)/main.cpp $(SRC_DIR)/Calculator.cpp
TEST_SRCS := $(TEST_DIR)/basic_test.cpp $(SRC_DIR)/Calculator.cpp

OBJS     := $(SRCS:.cpp=.o)
TEST_OBJS := $(TEST_SRCS:.cpp=.o)

all: $(NAME)
	@echo "✅ $(NAME) listo — prueba con: ./calculator"

$(NAME): $(OBJS)
	@echo "🔗 Enlazando..."
	$(CXX) $(CXXFLAGS) -o $(NAME) $(OBJS)

test: $(TEST_OBJS)
	$(CXX) $(CXXFLAGS) -o test_runner $(TEST_OBJS)
	@echo "🧪 Ejecutando tests..."
	@./test_runner

%.o: %.cpp
	@echo "🔨 Compilando $<"
	$(CXX) $(CXXFLAGS) -I$(INC_DIR) -c $< -o $@

clean:
	@rm -f $(OBJS) $(TEST_OBJS)
	@echo "🧹 Objetos eliminados"

fclean: clean
	@rm -f $(NAME) test_runner
	@echo "💀 Ejecutables eliminados"

re: fclean all

.PHONY: all clean fclean re test
