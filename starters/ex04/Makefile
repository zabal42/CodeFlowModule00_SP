NAME     := code_reviewer
CXX      := c++
CXXFLAGS := -Wall -Wextra -Werror -std=c++17

SRCS     := main.cpp CodeReviewer.cpp
OBJS     := $(SRCS:.cpp=.o)

all: $(NAME)
	@echo "✅ $(NAME) listo — prueba con: ./code_reviewer [archivo.cpp]"

$(NAME): $(OBJS)
	@echo "🔗 Enlazando..."
	$(CXX) $(CXXFLAGS) -o $(NAME) $(OBJS)

%.o: %.cpp
	@echo "🔨 Compilando $<"
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	@rm -f $(OBJS)
	@echo "🧹 Objetos eliminados"

fclean: clean
	@rm -f $(NAME)
	@echo "💀 Ejecutables eliminados"

re: fclean all

.PHONY: all clean fclean re
