module Api
  class TodosController < ApplicationController
    def index
      render json: [
        {
          id: 1, 
          desc: "hello world",
          completed: false
        }
      ]
    end
  end
end
