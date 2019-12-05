# frozen_string_literal: true

class CardsController < ApplicationController
  before_action :set_card, only: %i[update destroy]
  def index
    @list = List.find(params[:list_id])
    @cards = @list.cards.order(created_at: :desc)
    respond_to do |format|
      format.json do
        render json: @cards
      end
    end
  end

  def create
    card = Card.create(card_params)
    card.images.attach(params[:image]) if params[:image]
    respond_to do |format|
      format.json do
        render json: card
      end
    end
  end

  def update
    @card.update(card_params)
    render json: @card
  end

  def destroy
    @card.destroy
    render json: @card
  end

  def delete_image_attachment
    @image = ActiveStorage::Blob.find_signed(params[:id])
    @image.attachments.first.purge
    redirect_to collections_url
  end

  def archive_cards
    @card = PostEvent.where(id: params[:card_params_ids])
    @card.update_all(archive: true)
    head :ok
  end

  private

  def card_params
    params.require(:card).permit(:title, :list_id, :description, image: [])
  end

  def set_card
    @card = Card.find(params[:id])
  end
end