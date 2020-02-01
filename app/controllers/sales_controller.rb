class SalesController < ApplicationController
  helper_method :sale

  def create
    sale = Sale.create_with_progression(sale_params)

    if sale.persisted?
      render json: sale
    else
      head :unprocessable_entity
    end
  end

  def show
    if !Sale.exists?(params[:id])
      render json: { error: "Not Found"}, status: 404
    else
      sale = Sale.find(params[:id])
      progressions = sale.progressions.order('created_at DESC') 
      render json: {sale: sale, progressions: progressions}
    end
  end

  def update
    sale = Sale.find(params[:id])

    if sale.progress_to(stage)
      render json: sale
    else
      head :unprocessable_entity
    end
  end

  private

  def sale_params
    params.require(:sale).permit(:product, :customer, :amount)
  end

  def stage
    params.require(:sale).require(:stage)
  end
end
